const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.class-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


loadEventListeners();

function loadEventListeners(){

    form.addEventListener('submit', addTask)
}

function addTask(e) {
    if(taskInput.value === ''); {
    alert ('Add a task')
}

const li = document.createElement('li')
li.className = 'collection-item';
li.appendChild(document.createTextNode(taskInput.value));

const link = document.createElement('a');
link.className = "delete-item secondary-content";

link.innerHTML = '<i class="fa fa-remove"></li>';
li.appendChild(link);



e.preventDefault();
}
