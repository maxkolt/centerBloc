
var colorArray = ["gold", "red", "white"];
var i = 0;
function changeColor(){
    document.body.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
}