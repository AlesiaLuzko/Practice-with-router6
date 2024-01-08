import {
  Link,
  useNavigate,
  useLoaderData,
  Await,
  useAsyncValue
} from "react-router-dom";
import { Suspense } from "react";

const Post = () => {
  const post = useAsyncValue();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
};

const Comments = () => {
  const comments = useAsyncValue();

  return (
    <div style={{textAlign: "left"}}>
      <h2 style={{textAlign: "center"}}>Comments</h2>
      {
        comments.map(comment => (
          <div>
            <h4>{comment.email}</h4>
            <h5>{comment.name}</h5>
            <p>{comment.body}</p>
          </div>
        ))
      };
    </div>
  )
};

const SinglePage = () => {
  const { post, id, comments } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', {replace: true});

  return(
    <div style={{textAlign: "center"}}>
      <button
        className="btn btn-link"
        onClick={goBack}>Go back</button>
      <button
        className="btn btn-link"
        onClick={goHome}>Go home</button> {/*Bad approach*/}
      <Suspense fallback={<h2>Post is loading...</h2>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
      <Suspense fallback={<h2>Comments are loading...</h2>}>
        <Await resolve={comments}>
          <Comments />
        </Await>
      </Suspense>
      <Link to={`/posts/${id}/edit`}>Edit this post</Link>
    </div>
  );
};

async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return  res.json();
}

async function getCommentsByPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  return res.json();
}

export const singleLoader = async ({ params }) => {
  const id = params.id;
  return {
    post: await getPostById(id),
    id,
    comments: getCommentsByPost(id)
  }
};

export default SinglePage;