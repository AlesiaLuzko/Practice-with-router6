import {
  Link,
  useLoaderData,
  useSearchParams,
  Await, json
} from "react-router-dom";

import BlogFilter from "../components/blog-filter";
import {Suspense} from "react";

const BlogPage = () => {
  const {posts} = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

  return (
    <div>
      <h1 style={{textAlign: "center"}}>News</h1>
      <BlogFilter
        setSearchParams={setSearchParams}
        postQuery={postQuery}
        latest={latest}
      />
      <Link to="/posts/new">Add new post</Link>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={posts}>
          {
            (resolvedPosts) => (
              <div>
                {
                  resolvedPosts.filter(
                    post => post.title.includes(postQuery) && post.id >= startsFrom
                  ).map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                      <li>{post.title}</li>
                    </Link>
                  ))}
              </div>
            )
          }
        </Await>
      </Suspense>

    </div>
  );
};

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Response('', {status: res.status, statusText: 'Not found'})
  } /* first variant */

  return res.json();
}

export const blogLoader = async () => {
  const posts = getPosts();

  // if (!posts.length) {
  //   throw json({message: 'Not found', reason: 'Wrong url'}, {status: 404})
  // } /* second variant (don't work) */

  return {
    posts
  }
};

export default BlogPage;