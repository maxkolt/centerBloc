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
                out += `<li><input type="checkbox" checked>${todoList[key].todo}</li>`;
            } else {
                out += `<li><input type="checkbox">${todoList[key].todo}</li>`;
            }

        }
        document.getElementById('todoList').innerHTML = out;


    }
}

//удалять элемент из списка при нажатии на кнопку "Очистить список"

const clearButton = document.getElementById('clearButton');

function onClear() {
    const checkboxCollection = document.querySelectorAll('li');
    const checkboxes = [...checkboxCollection];
    checkboxes.map((item) => {
        if (item.children[0].checked === true) {
            item.remove()
        }
        return item;
    })
}

//clearButton.addEventListener('click', onClear);

function onClear() {
    const checkboxCollection = document.querySelectorAll('li');
    const checkboxes = [...checkboxCollection];
    todoList = [];
    checkboxes.forEach((item) => {
        if (item.children[0].checked === true) {
            item.remove()
        } else {
            todoList.push({'todo': item.innerText, 'check': false})
        }

    })
    localStorage.setItem('todo', JSON.stringify(todoList));
}

clearButton.addEventListener('click', onClear);
