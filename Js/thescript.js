// function setupLocalStorage() {

//     const obj = {
//         name: "mildred",
//         stage: 4,
//         languages: ["html", "Css", "Javascript"]
//     }
//     let age = 70;
//     // key=value pairs eg let age = 26;
//     // localStorage.setItem("age", age.ageToString());  turn a number to string
//     console.log(localStorage.getItem(obj));
//     // localStorage.setItem()
//     // localStorage.clear()
//     // localStorage.length()
//     // localStorage.key()

//     console.log(age);
// }

// window.onload = setupLocalStorage();


const taskInput = document.querySelector('#fname')
const taskList = document.querySelector('#taskList')
const addTaskForm = document.querySelector('.formGroup')


taskList.style = `
    list-style: none;
    margin-top: 1rem;
    font-size: 1.5rem;
    color: var(--purple);
    height: 4rem;
    border-radius: 0.2rem;
    position: relative;
    // border: 1px solid red;
    padding: 2rem;
`

const createTaskItem = (task) => `
<li>
<input type="checkbox" name="task" value="${task}" onChange="toggleTaskCompletion(event)" />
<label for="task">${task}</label>
<button type="button" onClick="removeTask(event)">X</button>
<hr/>
</li>
`

const storedTasks =
    JSON.parse(localStorage.getItem('tasks')) || []


const renderTasks = () => {
    storedTasks.forEach((task) => {
        taskList.insertAdjacentHTML(
            'beforeend',
            createTaskItem(task)
        )
    })
}

window.onload = renderTasks();

const addTask = (event) => {
    event.preventDefault()
    const task = taskInput.value
    const taskItem = createTaskItem(task)
    taskList.insertAdjacentHTML('beforeend', taskItem)
    storedTasks.push(task)
    localStorage.setItem(
        'tasks',
        JSON.stringify(storedTasks)
    )
    addTaskForm.reset()
}


// same as adding onsubmit="addTask(event)" to the form element in the html file, it's the event listener when we submit using the submit image
addTaskForm.addEventListener('submit', addTask);

const toggleTaskCompletion = (event) => {
    const taskItem = event.target.parentElement
    const task = taskItem.querySelector('label')
    if (event.target.checked) {
        task.style.textDecoration = 'line-through'
    } else {
        task.style.textDecoration = 'none'
    }
}

//adding the funtionality that will remove the task once the user clicks x
const removeTask = (event) => {
    const taskItem = event.target.parentElement

    const task = taskItem.querySelector('label').innerText
    const indexOfTask = storedTasks.indexOf(task)

    storedTasks.splice(indexOfTask, 1)
    localStorage.setItem(
        'tasks',
        JSON.stringify(storedTasks)
    )
    taskItem.remove()
}