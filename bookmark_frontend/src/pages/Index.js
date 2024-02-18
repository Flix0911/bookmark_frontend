import { useLoaderData, Link, Form } from "react-router-dom";

const Index = () => {
  const bookmarks = useLoaderData();

  return (
    <div>
      
      <div className="Bookmarks-list">
        <h2>Bookmark List:</h2>
        {/* made a correction to the variable inside the map by adding "()" around bookmark  */}
        {bookmarks.map((bookmark) => {
          return (
            <div key={bookmark._id} className="bookmark">
              <Link to={`/${bookmark._id}`}>
                <h3>{bookmark.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="create-form">
        <h2>Add a new bookmark</h2>
        <Form action="/create" method="post">
          <input type="input" name="title" placeholder="website" />
          <input type="input" name="url" placeholder="http://" />
          {/* commented this input out of all forms that contain it as it is not a part of the Schema  */}
          {/* <input type='input' name='description' placeholder='what does this website help with?'/> */}
          <input type="submit" value={"Create Bookmark"} />
        </Form>
      </div>

    </div>
  );
};

export default Index;
