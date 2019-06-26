const tasksList = document.getElementById('tasksList')
const usersList = document.getElementById('usersList')
const progressList = document.getElementById('progressList')
const addUserForm = document.getElementById('addUserForm')
const addTaskForm = document.getElementById('addTaskForm')

const displayItem = (item, list) => {
    itemEl = document.createElement('li')
    itemEl.id = item._id
    itemEl.innerText = item.name || item.firstName || item._id
    list.appendChild(itemEl)
}

const displayAllItems = (items, list) => {
    items.forEach(item => displayItem(item, list))
}

const addUser = () => {
    addUserForm.addEventListener('submit', e => {
        e.preventDefault()
        const newUser = {
            firstName: addUserForm.firstName.value,
            lastName: addUserForm.lastName.value,
            email: addUserForm.email.value,
            startDate: addUserForm.startDate.value
        }
        create(USERS_URL, newUser)
            .then(user => displayItem(user, usersList))
        addUserForm.reset()
    })
}

const addTask = () => {
    addTaskForm.addEventListener('submit', e => {
        e.preventDefault()
        const newTask = {
            name: addTaskForm.name.value,
            description: addTaskForm.description.value,
            link: addTaskForm.link.value,
            dayDue: addTaskForm.dayDue.value,
            weekDue: addTaskForm.weekDue.value
        }
        create(TASKS_URL, newTask)
            .then(task  => displayItem(task, tasksList))
        addTaskForm.reset()
    })
}


const initialize = () => {
    addUser()
    addTask()
    list(TASKS_URL)
        .then(tasks => displayAllItems(tasks, tasksList))
    list(USERS_URL)
        .then(users => displayAllItems(users, usersList))
    list(PROGRESS_URL)
        .then(progress => displayAllItems(progress, progressList))
}

initialize()