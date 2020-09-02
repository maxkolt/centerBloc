// TODO: код писать ниже --->

// Создайте новый элемент списка при нажатии на кнопку "Добавить в список"
window.onload = function () {

    let todoList = [];
    if (localStorage.getItem('todo') != undefined) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        out();
    }
    document.getElementById("addButton").onclick = function () {
        let add = document.getElementById("itemInput").value;
        //{todo : Добавить хлеб, check: false}
        let temp = {};
        temp.todo = add;
        temp.check = false;
        let i = todoList.length;
        todoList[i] = temp;
        console.log(todoList);
        out();
        localStorage.setItem('todo', JSON.stringify(todoList));

    }

    function out() {
        let out = '';
        for (var key in todoList) {
            if (todoList[key].check == true) {
                out += '<input type="checkbox" checked>';
            } else {
                out += '<input type="checkbox">'
            }
            out += todoList[key].todo + '<br>';

        }
        document.getElementById('todoList').innerHTML = out;


    }
}

//удалять элемент из списка при нажатии на кнопку "Очистить список"
let clearButton = document.createElement("button").onclick;

const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

//This function creates a new list element
function newTodo() {
    var clicks = document.getElementsByTagName("input").length;
    var item = prompt("Please enter a goal", " ")
    if(item == null){
        return cheese
    }
    clicks ++;
    itemCountSpan.innerHTML = clicks;
    list.innerHTML = list.innerHTML + "<li id = 'clicks'> <input type = checkbox onclick = 'checker()' class = 'todo-checkbox'>Goal: " + item +
        "</input>" + "<button class = 'todo-delete' value = clicks onclick = 'deleteToDo(this.value)'>Delete</button></li>"

}
//This function sets the unchecked count
function checker(){
    var Total = 0;
    for (var i = 0; i < document.getElementsByTagName("input").length; i++){
        if (!document.getElementsByTagName("input")[i].checked){
            Total ++;
            uncheckedCountSpan.innerHTML = Total;
        }
    }
}
//This function deletes a list element selected
function deleteToDo(sel_id){

    list.removeChild(document.getElementsByTagName("li")[sel_id]);
    var clicks = document.getElementsByTagName("input").length;
    itemCountSpan.innerHTML = clicks;

}











//function clearButton() {
  //  items[ulIndex].parentNode.removeChild(items[ulIndex]);
//}

//clearButton.innerText = "Delete";
//clearButton.className = "delete";

//function loadEventListener() {
//  todoList.addEventListener('click', todoList);
//   clearButton.addEventListener('click', clearButton);
//}


//function todoList(event) {
// event.target.parentElement.remove();
//}

//function clearButton() {
//   todoList.innerHTML = '';
//}

