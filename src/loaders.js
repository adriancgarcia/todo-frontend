import url from "./url"

// Index load to load all todos
export const indexLoader = async () => {
    // make api call to backend index route
    const response = await fetch(url)
    // turn response into a javascript object
    const todos = await response.json()
    // return the javascript object so the Index component can use it
    return todos
}

// SHow loader to laos a single thing todo
export const showLoader = async ({params}) => {
    // grab tje id from params
    const id = params.id
    // make API call from backend show route
    const response = await fetch(url + id)
    // turn response into a javascript object
    const todo = await response.json()
    // return the javascript object so the SHow component can use it
    return todo
}
