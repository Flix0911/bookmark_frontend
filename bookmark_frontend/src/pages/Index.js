import {Link, useLoaaderData, Form} from "react-router-dom"

const Index = () => {
    const bookmarks = useLoaderData();
    
    return(
        <div>

            <h2>Booklist</h2>
            {bookmarks.map(bookmark =>{
                return (
                    <div key={bookmark._id} className="bookmark">
                        <Link to={`/${bookmark._id}`}>
                            <h3>{bookmark.name}</h3>
                            <h2>{bookmark.url}</h2>
                        </Link>
                    </div>
                )
            })}

    <h2>Add a new bookmark</h2>
            <Form action='/create' method='post'>
                <input type='input' name='name' placeholder='website'/>
                <input type='input' name='url' placeholder='http://'/>
                <input type='input' name='description' placeholder='what does this website help with?'/>
                <input type='submit' value={'create bookmark'}/> 
            </Form>
        </div>
    )
}

export default Index;