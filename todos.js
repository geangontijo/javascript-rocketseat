var lista = document.querySelector('#listas');
var btn = document.querySelector('#app button');
var input = document.querySelector('#app input');

var todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    lista.innerHTML = '';

    todos.forEach(el => {
        var li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        var texto = document.createTextNode(el);
        li.appendChild(texto);

        var remove = document.createElement('button');
        remove.className = 'btn btn-danger order-last';
        textRemove = document.createTextNode('Remove');
        remove.appendChild(textRemove);
        remove.setAttribute('onclick', `removeTodo(${todos.indexOf(el)})`)
        li.appendChild(remove);

        lista.appendChild(li)

    });
}

renderTodos();

function addTodo() {

    todos.push(input.value);
    input.value = '';
    renderTodos();
    saveToStorage();
}

btn.addEventListener('click', addTodo);

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
    saveToStorage();
}
function saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(todos))
}