import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL

//creatre a bookmark
export const createAction = async ({ request }) => {
    //variable for the formdata
    const formData = await request.formData()

    //created bookmark //EV check and ensure variable names are good inside the rest of the front end
    const createdBookmark = {
        title: formData.get('title'),
        url: formData.get('url')
    }
    
    //fetch and what method is occuring - 'post for createAction
    await fetch(`${URL}/bookmark`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdBookmark)
    })
    //redirect the page
    return redirect('/')
}

