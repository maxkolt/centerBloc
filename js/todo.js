// TODO: код писать ниже --->

// Создайте новый элемент списка при нажатии на кнопку "Добавить"
function newElement() {
    const taskInput = document.getElementById("itemInput").value;
    const t = document.createTextNode("itemInput");
    li.appendChild(t);
    if (inputValue === '') {
        alert("Вы должны что-то написать!");
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("itemInput").value = "";
}
/*
    let buttonElement = document.createElement("button");
    let txt = document.createTextNode("itemInput");
    addButton.className = "close";
    addButton.appendChild(txt);
    li.appendChild(addButton);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
*/