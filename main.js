function addValue(value) {
    var result = document.getElementById("result");

    result.value += value;
}

function cleanResult() {
    var result = document.getElementById("result");

    result.value = " ";
}

function printResult() {
    var text = document.getElementById("result");
    var result = eval(text.value);
    text.value = result;
}

function sinFunction() {
    var text = document.getElementById("result");
    var result = eval(text.value);
    let radians = result * Math.PI/180;
    var sin = Math.sin(radians);

    text.value = sin.toFixed(2);
}

function cosFunction() {
    var text = document.getElementById("result");
    var result = eval(text.value);
    let radians = result * Math.PI/180;
    var cos = Math.cos(radians);

    text.value = cos.toFixed(2);
}

function tanFunction() {
    var text = document.getElementById("result");
    var result = eval(text.value);
    let radians = result * Math.PI/180;
    var tan = Math.tan(radians);

    text.value = tan.toFixed(2);
}