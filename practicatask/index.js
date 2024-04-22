const taskForm = document.querySelector(".task-form")
const inputTask = document.querySelector(".input-task")
const taskList = document.querySelector(".task-list")
const updateModal = document.querySelector(".update-modal")
const updateForm = document.querySelector(".update-form")


let tasks

if (
    !localStorage.getItem("tasks")) {
    tasks = []
} else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
}

taskForm.addEventListener("submit", function (e) {
    e.preventDefault()
    let content = inputTask.value
    let newTask = {
        id: new Date().getTime(),
        taskContent: content,
        isCompleted: false
    }
    showTask(newTask)
    tasks.push(newTask)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    inputTask.value = ''
    
})


console.log(tasks)

function showTask(task) {

    taskList.innerHTML += `
        <div class="task-item">
        <li class="task-description">${task.taskContent}</li>
        <button class="task-btn complete-btn" >
            <i class="far fa-check-square"></i>
        </button>
        <button class="task-btn update-btn" >
        <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="task-btn task-btn-delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>`
}

function fromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    tasks.forEach(task => {
        showTask(task)
    });
}
fromLocalStorage()










