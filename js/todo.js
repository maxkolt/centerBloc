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
//const list = document.getElementById('todoList')



function deliteButton(){

    list.removeChild(document.getElementsByTagName("ul"));
    var clicks = document.getElementsByTagName("todoList").length;
    clearButton.innerHTML = clicks;

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

