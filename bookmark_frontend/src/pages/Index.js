import { useLoaderData, Link, Form } from "react-router-dom";

const Index = () => {
  const bookmarks = useLoaderData();

  return (
    <div>
      <div className="bookmarks-list">
        <div className="list-head">
          <h2>Bookmark List:</h2>
        </div>
        <div className="list">
          {/* made a correction to the variable inside the map by adding "()" around bookmark  */}
          {bookmarks.map((bookmark) => {
            return (
              <div key={bookmark._id} className="bookmark-li">
                <Link to={`/${bookmark._id}`}>
                  <h3>{bookmark.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="info">
        <div className="info-head">
          <h2>Welcome to our Bookmark App!</h2>
        </div>
        <div className="content">
          <p>
            Add a bookmark to your favorite webpage by typing in a title and the
            url in the form below! We hope you enjoy our application!
          </p>
        </div>
      </div>

      <div className="create-form">
        <div className="create-head">
        <h2>Add a new bookmark</h2>
        </div>
        <Form action="/create" method="post">
          <input type="input" name="title" placeholder="website" />
          <input type="input" name="url" placeholder="http://" />
          {/* commented this input out of all forms that contain it as it is not a part of the Schema  */}
          {/* <input type='input' name='description' placeholder='what does this website help with?'/> */}
          <button type="submit">Create Bookmark</button>
        </Form>
      </div>
    </div>
  );
};

export default Index;
