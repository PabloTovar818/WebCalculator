// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const keys = document.querySelector('.calc-buttons');
const output = document.querySelector('#display-area');
let a;
let b;
let operator;

keys.addEventListener('click', key => {
    if (key.target.matches('button'))
    {
        if (key.target.matches('#add-key') ||
            key.target.matches('#subtract-key') ||
            key.target.matches('#multiply-key') ||
            key.target.matches('#divide-key'))
        {
            console.log('operator key pressed!')
            saveVars(key);
            clearContents();
        }
        else if (key.target.matches('#clear-key'))
        {
            console.log('clear key pressed!')
            clearVars();
            clearContents();
        }
        else if (key.target.matches('#equals-key'))
        {
            console.log('equals key pressed!')
            solve(key);
        }
        else {
            outputKey(key);
        }
    };
})

function outputKey(key) {
    if (output.innerText != "0" && output.innerText != "error") {
        if (parseInt(output.innerText) < 1000000000) {
            output.innerHTML += key.target.value;
        }
        else {
            alert("Error: character limit reached");
        }
    }
    else {
        output.innerHTML = key.target.value;
    }
}

function clearContents() {
    output.innerHTML = "0";
}

function saveVars(key) {
    operator = key.target.value;
    if (a == undefined) {
        a = parseInt(output.innerText);
        console.log("var a:" + a);
    }
    else if (b == undefined) {
        b = parseInt(output.innerText);
        console.log("var b: " + b);
    }
    else {
        a = solve(key, operator);
    }
}

function solve(key, op) {
    if (a != undefined) {
        if (b == undefined) {
            b = parseInt(output.innerHTML);
        }
        switch (operator) {
            case "+":
                console.log("solving...");
                a += b;
                break;
            case "-":
                a -= b;
                break;
            case "*":
                a *= b;
                break;
            case "/":
                a = a / b;
                break;
        }
        displaySolution(a);
        return a;
    }
    else {
        output.innerHTML = "error";
    }
}

function displaySolution(a) {
    if (a < 1000000000) {
        output.innerHTML = a;
    }
    else {
        output.innerHTML = "error";
        alert("Error: character limit reached");
        clearVars();
    }
}

function clearVars() {
    a = undefined;
    b = undefined;
}
