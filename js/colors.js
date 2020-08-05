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

const knopka = document.getElementById('cnopka');
knopka.addEventListener('click', () => {
    const kvadrat = document.getElementById('3');
    kvadrat.remove();
});

// TODO: разве функция работает?
menu.addEventListener('click', function (e) {
    const {target} = e;
    if (target.tegName !== 'button') return;
    const parent = target.parentElement;
    const clone = parent.cloneNode(true);
    clone.removeChild(clone.querySelector('button'));
    bar.appendChild(clone);
});
