const BASE_URL = "http://localhost:4000/"
const USERS_URL = BASE_URL + "users"
const PROGRESS_URL = BASE_URL + "progress"
const TASKS_URL = BASE_URL + "tasks"

const list = (url) => {
    fetch(url)
        .then(resp => resp.json())
        .then(console.log)
}

const show = (url, id) => {
    fetch(url + `/${id}`)
        .then(resp => resp.json())
        .then(console.log)
}

const create = (url, bodyObj) => {
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(bodyObj)
    })
}

const update = (url, id, bodyObj) => {
    fetch(url + `/${id}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(bodyObj)
    })
}

const remove = (url, id) => {
    fetch(url + `/${id}`, {
        method: 'DELETE'
    })
}