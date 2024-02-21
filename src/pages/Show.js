import { useLoaderData, Link, Form } from "react-router-dom";

const Show = () => {
  const bookmark = useLoaderData();

  return (
    <div>
      <div className="return">
        <Link style={{textDecoration: "none"}} to={"/"}>
          <h2>Return to Index</h2>
        </Link>
      </div>
      <div className="bookmark">
        <h1>{bookmark.title}</h1>
        <Link style={{textDecoration: "none"}}to={`${bookmark.url}`}>
          <h2>{bookmark.url}</h2>
        </Link>

        {/* <p>{bookmark.description}</p> */}
      </div>

      <div className="update-form">
        <h3>Update {bookmark.title}</h3>
        <Form action={`/update/${bookmark._id}`} method="post">
          <input type="input" name="title" placeholder="website" />
          <input type="input" name="url" placeholder="http://" />
          {/* <input type='input' name='description' placeholder='what does this website help with?'/> */}
          <button type="submit">{`Update ${bookmark.title}`}</button>
        </Form>
      </div>

      <div className="delete-button">
        <Form action={`/delete/${bookmark._id}`} method="post">
          <button className="delete-but" type="submit">{`Delete ${bookmark.title}`}</button>
        </Form>
      </div>
    </div>
  );
};

export default Show;
