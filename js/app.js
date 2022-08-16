console.log("Enlace a js");
const formulario = document.getElementById('formulario')
const listaTareas = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()

let tareas = {}

document.addEventListener('DOMContentLoaded', () => {
    //console.log{formulario, listaTareas, template}
    if(localStorage.getItem('tareas')){
        tareas = JSON.parse(localStorage.getItem('tareas'))
    }
})

formulario.addEventListener('submit', e =>{
    e.preventDefault{}
    //console.log('evento', e)
    setTarea{e}
})

const setTarea = e => {
    const texto = e.target.querySelector('input').value
    console.log('text', texto)

    if(texto.trim() === ''){
        console.log('cadena vacia')
        return
    }
    const tarea = {
        id: Date.now(),
        texto,
        estado: false
    }
    tareas[tarea.id] = tarea
    pintarTareas()
    formulario.reset()
    e.target.querySelector('input'),focus()
}

const pintaTareas = () => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
    if(Object.values(tareas).length === 0){
        listaTareas-innerHTML = 
        `
            <div class ="alert-dark">
            Sin tareas pendientes
            </div>
        `
        return
    }
    listaTareas.innerHTML = ''
    Object.values(tareas).forEach(tarea => {
        //console.log('tarea', tarea)
        const clone = template.cloneNoce(true)
        clone.querySelector('p').textContent = tarea.texto
        if(tarea.estado){
            clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle', 'fa-undo-all')
            clone.querySelector('.alert'),classList.replace('alert-warning', 'alert-primary')
            clone.querySelector('p').style.textDecoration = 'line-trough'
        }
        fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}