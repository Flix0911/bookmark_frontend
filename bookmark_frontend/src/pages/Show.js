import { useLoaderData, Form } from "react-router-dom";

const Show = () => {
  const bookmark = useLoaderData();

  return (
    <div className="bookmark">
        <h1>{bookmark.name}</h1>
        <h2>{bookmark.url}</h2>
        <p>{bookmark.description}</p>

        <Form action={`/update/${bookmark._id}`} method='post'>
        <fieldset>
            <legend>Update {bookmark.name}</legend>
        <input type='input' name='name' placeholder='website'/>
            <input type='input' name='url' placeholder='http://'/>
            <input type='input' name='description' placeholder='what does this website help with?'/>
            <input type='submit' value={`update ${bookmark.name}`}/>
        </fieldset>
        </Form>

        <h2>Delete Bookmark</h2>
        <Form action={`/delete/${bookmark._id}`} method='post'>
            <input type='submit' value={`Delete ${bookmark.name}`}/>
        </Form>

    </div>
  );
};

export default Show;
