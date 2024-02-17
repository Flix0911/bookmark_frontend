import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL

//create a bookmark
export const createAction = async ({ request }) => {
    //variable for the formdata
    const formData = await request.formData()

    //created bookmark //EV check and ensure variable names are good inside the rest of the frontend
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

//update bookmark
export const updateAction = async ({ request, params }) => {
    //variable for the formdata
    const formData = await request.formData()

    //updated bookmark //EV check and ensure variable names are good inside the rest of the frontend
    const updatedBookmark = {
        title: formData.get('title'),
        url: formData.get('url')
    }

    //fetch - and what method is occuring - 'put' for updateAction
    await fetch(`${URL}/bookmark/${params.id}`, {
        method: 'put',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedBookmark)
    })
    //redirect the page
    return redirect('/')
}

//delete a bookmark
export const deleteAction = async ({ params }) => {
    await fetch(`${URL}/bookmark/${params.id}`, {

        //what method to delete - delete
        method: 'delete'
    })
    //redirect the action
    return redirect('/')
}