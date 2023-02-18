// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//global vars
var output = document.getElementById("calc-result");
var text = document.getElementById("calc-result").innerText;

function displayButtonValue(value) {
    if (value == '+' || value == '-' || value == '*' || value == '/') {
        //WIP
        //parse 'text' for chars. determine expression to be evaluated
        //END WIP
        output.value = '';
    }
    else {
        output.value = output.value + value;
    }
}