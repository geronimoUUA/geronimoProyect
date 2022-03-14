import {saveTask} from './firebase.js'
window.addEventListener(`DOMContentLoaded`, ()=>{
    
})

const taskForm = document.getElementById('task-form')

taskForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    const title = taskForm['task-title']
    const contraseña = taskForm['task-contraseña']

    saveTask(title.value, contraseña.value)
    taskForm.reset()
})