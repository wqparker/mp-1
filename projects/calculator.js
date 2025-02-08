function my_add() {
    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);
    let answer = x + y;

    let outputElement = document.getElementById("output");
    outputElement.innerHTML = String(answer);
    
    if (answer < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }
}

function my_subtract() {
    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);
    let answer = x - y;

    let outputElement = document.getElementById("output");
    outputElement.innerHTML = String(answer);
    
    if (answer < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }
}

function my_multiply() {
    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);
    let answer = x * y;

    let outputElement = document.getElementById("output");
    outputElement.innerHTML = String(answer);
    
    if (answer < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }}

function my_divide() {
    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);
    let answer = x / y;

    let outputElement = document.getElementById("output");
    outputElement.innerHTML = String(answer);
    
    if (answer < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }}

function my_power() {
    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);

    let isNeg = false;
    if (y < 0) {
        y = y * -1;
        isNeg = true;
    }
    
    let answer = 1;
    for (let i = 0; i < y; i++) {
        answer = answer * x;
    }

    if (isNeg) {
        answer = 1 / answer;
    }

    let outputElement = document.getElementById("output");
    outputElement.innerHTML = String(answer);
    
    if (answer < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }
}

function my_clear() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("output").innerHTML = "";
}
