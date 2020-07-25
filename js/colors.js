const colorArray = ["gold", "red", "white"];
let i = 0;

function changeColor() {
    document.body.style.background = colorArray[i];
    i++;
    if (i >= colorArray.length) {
        i = 0;
    }
}

function klik(id) {
    const elem = document.getElementById(id);
    const state = elem.style.display;
    if (state == '') elem.style.display = 'none';
    else elem.style.display = '';
}

const elem = document.getElementById('3');
elem.parentNode.removeChild(elem);