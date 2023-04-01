
let calcValue = 0;
let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")
// let num1Int = parseInt(num1);
// let num2Int = parseInt(num2);


let add  = document.getElementById("add")
let sub = document.getElementById("sub")
let mul = document.getElementById("mul")
let div = document.getElementById("div")

let result = document.getElementById("result");

function addValue() {
    let input1 = parseInt(num1.value);
    let input2 = parseInt(num2.value);
    calcValue = input1 + input2;
    console.log(input1, input2)   
    result.innerHTML = calcValue;
}

function subValue() {
    let input1 = parseInt(num1.value);
    let input2 = parseInt(num2.value);
    calcValue = input1 - input2;
    console.log(input1, input2)
    result.innerHTML = calcValue;
}

function mulValue() {
    let input1 = parseInt(num1.value);
    let input2 = parseInt(num2.value);
    calcValue = input1 * input2;
    console.log(input1, input2)
    result.innerHTML = calcValue;
}

function divValue() {
    let input1 = parseInt(num1.value);
    let input2 = parseInt(num2.value);
    calcValue = input1 / input2;
    console.log(input1, input2)
    result.innerHTML = calcValue;
}

add.addEventListener('click', addValue);
sub.addEventListener('click', subValue);
mul.addEventListener('click', mulValue);
div.addEventListener('click', divValue);