// TODO: код писать ниже --->

// Создайте новый элемент списка при нажатии на кнопку "Добавить"
window.onload = function() {

    let todoList = [];

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

    }

    function out() {
        let out = '';
        for (var key in todoList) {
            out += todoList[key].todo + '<br>';
        }
        document.getElementById('todoList').innerHTML = out;


    }
}