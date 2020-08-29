// Документ - это DOM, к которому можно получить доступ в консоли с помощью document.window.
// Дерево сверху, html, body, p и т. Д.

// Проблема: взаимодействие с пользователем не дает правильных результатов.
// Решение: добавьте интерактивности, чтобы пользователь мог управлять повседневными задачами.
// Разбиваем все на более мелкие шаги и делаем каждый шаг за раз.

// Обработка событий, взаимодействие с пользователем - это то, что запускает выполнение кода.

let taskInput = document.getElementById("new-task");// Добавить новую задачу.
let addButton = document.getElementsByTagName("button")[0];// первая кнопка
let incompleteTaskHolder = document.getElementById("incomplete-tasks");//ul #неполной-задачи
let completedTasksHolder = document.getElementById("completed-tasks");//выполнение задач


//Новый элемент списка задач
let createNewTaskElement = function (taskString) {

    let listItem = document.createElement("li");

    //ввод данных (флажок)
    let checkBox = document.createElement("input");//флажок
    //лейба
    let label = document.createElement("label");//лейба
    //ввод данных (текст)
    let editInput = document.createElement("input");//текст
    //кнопка.редактировать
    let editButton = document.createElement("button");//кнопка редактировать
    //кнопка удаления
    let deleteButton = document.createElement("button");//кнопка удаления

    label.innerText = taskString;

    // Каждый элемент, нуждается в добавлении
    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Править";// innerText кодирует специальные символы, HTML-нет.
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";


    //и добавление
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}


let addTask = function () {
    console.log("Add Task...");
    //Создать новый элемент списка с текстом из #new-task:
    let listItem = createNewTaskElement(taskInput.value);

    //Добавить listItem к incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";

}

// Редактировать существующую задачу.

let editTask = function () {
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");


    let listItem = this.parentNode;

    let editInput = listItem.querySelector('input[type=text]');
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains("editMode");
    //Если класс родителя есть .editMode
    if (containsClass) {

        // переключиться на .editMode
        // label становится входным значением.
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }

    //тумблер .editMode на родителе.
    listItem.classList.toggle("editMode");
}


// Удалить задачу.
let deleteTask = function () {
    console.log("Delete Task...");

    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    // Удалите элемент родительского списка из ul.
    ul.removeChild(listItem);

}


// Отметить задачу выполненной
let taskCompleted = function () {
    console.log("Complete Task...");

    //Добавить элемент списка задач в #completed-tasks
    let listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);

}


let taskIncomplete = function () {
    console.log("Incomplete Task...");
// Отметьте задачу как незавершенную.
    //Когда флажок снят
    //Добавьте элемент списка задач к #incomplete-tasks.
    let listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}


let ajaxRequest = function () {
    console.log("AJAX Request");
}

// Клей, чтобы держать все это вместе.


//Установите обработчик щелчка в функцию addTask.
addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


let bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    console.log("bind list item events");
// выберите список детей ListItems
    let checkBox = taskListItem.querySelector("input[type=checkbox]");
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");


    //Персонализация editTask на кнопку "Редактировать".
    editButton.onclick = editTask;
    //Персонализация deleteTask на кнопку "Удалить".
    deleteButton.onclick = deleteTask;
    //Привязка задачи завершена к checkBoxEventHandler.
    checkBox.onchange = checkBoxEventHandler;
}

// цикл над элементами списка ul держателя незавершенной задачи
//для каждого элемента списка
for (let i = 0; i < incompleteTaskHolder.children.length; i++) {

    // привязка событий к элементам списка chldren(tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}


// цикл над завершенными задачами держатель ul список элементов
for (let i = 0; i < completedTasksHolder.children.length; i++) {
    // привязка событий к элементам списка chldren(tasksIncompleted)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
