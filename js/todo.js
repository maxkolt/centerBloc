// TODO: код писать ниже --->

// Создайте новый элемент списка при нажатии на кнопку "Добавить"
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