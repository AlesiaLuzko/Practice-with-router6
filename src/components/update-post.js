import { Form } from "react-router-dom";

const UpdatePost = ({ id, title, body, userId, submitting}) => {
  return (
    <Form method='post' action={`/posts/${id}/edit`}>
      <label style={{marginBottom: '10px'}}>
        Title:
        <input type="text" name="title" defaultValue={title} />
      </label><br/>
      <label style={{marginBottom: '10px'}}>
        Body:
        <input type="text" name="body" defaultValue={body} />
      </label><br/>
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="id" value={id} />
      <input type="submit" value="Update post" disabled={submitting} />
    </Form>
  )
}

export default UpdatePost;