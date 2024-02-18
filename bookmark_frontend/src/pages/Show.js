import { useLoaderData, Form } from "react-router-dom";

const Show = () => {
  const bookmark = useLoaderData();

  return (
    <div>
      
      <div className="bookmark">
        <h1>{bookmark.title}</h1>
        <h2>{bookmark.url}</h2>
        <p>{bookmark.description}</p>
      </div>

      <div className="update-form">
        <h3>Update {bookmark.title}</h3>
        <Form action={`/update/${bookmark._id}`} method="post">
          <input type="input" name="title" placeholder="website" />
          <input type="input" name="url" placeholder="http://" />
          {/* <input type='input' name='description' placeholder='what does this website help with?'/> */}
          <input type="submit" value={`Update ${bookmark.title}`} />
        </Form>
      </div>

      <div className="delete-button">
        <h3>Delete Bookmark</h3>
        <Form action={`/delete/${bookmark._id}`} method="post">
          <input type="submit" value={`Delete ${bookmark.title}`} />
        </Form>
      </div>

    </div>
  );
};

export default Show;
