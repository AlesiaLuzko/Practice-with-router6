import { Form } from "react-router-dom";

const NewPost = ({submitting}) => {
  return (
    <Form action="/posts/new" method='post'>
      <label style={{marginBottom: '10px'}}>
        Title:
        <input type="text" name="title" />
      </label><br/>
      <label style={{marginBottom: '10px'}}>
        Body:
        <input type="text" name="body" />
      </label><br/>
      <input type="hidden" name="userId" value="1" />
      <input type="submit" value="Add post" disabled={submitting}/>
    </Form>
  )
}

export default NewPost;