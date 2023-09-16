import url from "./url"
import {redirect} from "react-router-dom"

// create action for creating todos
export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct the body for API call
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // make a post request to create a todo
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })

    // redirect to the index page
    return redirect("/")
}

// update action for updating todos
export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated todo
    const updatedTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }
    // make a request to update a todo
    await fetch (url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTodo)
    })

    // redirect to the index page
    return redirect(`/post/${id}`)
}

// Delete action for deleting todos
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id
    // make a request to delete a todo
    await fetch (url + id, {
        method: "delete"
    })
    // redirect to the index page
    return redirect("/")
}
