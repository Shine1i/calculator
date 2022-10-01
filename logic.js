let currentValue = "";
let previousValue = "";
let isDecimal = false;
let operator = "";

const currentScreen = document.querySelector('.current');
const previousScreen = document.querySelector('.previous');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const del = document.querySelector('.Del');
const clear = document.querySelector('.AC');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');


numbers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        previousScreen.classList.remove('bold');
        if (previousValue === "Math Error") clearAll();
        if (currentValue === 0) currentValue ="";
        if (previousValue !== "" && currentValue !== "" && operator === "") {
            previousValue = "";
            currentScreen.textContent = currentValue;
        }
        if (Number(currentValue) <= 100000000){
            currentValue += e.target.textContent;
            currentScreen.textContent = currentValue;
            operatorPressed = false;
        }
    })
});


operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        previousScreen.classList.remove('bold');
        if (previousValue === "") {
            previousValue = currentValue;
            operatorCheck(e.target.textContent);
        }else if (currentValue === "") {
            operatorCheck(e.target.textContent);
        }else {
            solve();
            operator = e.target.textContent;
            currentScreen.textContent = "";
            previousScreen.textContent = `${previousValue} ${operator}`;
            isDecimal = false;
        }
    })
});

equals.addEventListener('click', () => {
    solve();
    previousScreen.textContent = previousValue;
    currentScreen.textContent = "";
    currentValue = "";
    previousScreen.classList.add('bold');
});

function solve() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if (operator === "+") previousValue += currentValue;
    if (operator === "-") previousValue -= currentValue;
    if (operator === "x") previousValue *= currentValue;
    if (operator === "÷") previousValue /= currentValue;
    if (operator === "!") {
        if (previousValue <= 0) previousValue = 1;
        for (let i = previousValue-1; i >= 1 ;i--){
            previousValue *= i;
        }
        if (previousValue >= 1000000000) previousValue = "Math Error";
        return previousValue;
    }
    previousValue = Math.round(previousValue*1000000000) / 1000000000;
    if (previousValue >= 1000000000) previousValue = "Math Error";
    currentValue = "";
    currentScreen.textContent = "";
}

function operatorCheck(op) {
    operator = op;
    currentScreen.textContent = "";
    previousScreen.textContent = `${previousValue} ${operator}`;
    currentValue = "";
    isDecimal = false;
}

del.addEventListener('click', () => {
    if (currentValue.length === 1) currentValue = 0;
    else currentValue = currentValue.slice(0,currentValue.length-1);
    currentScreen.textContent = currentValue;
    isDecimal = false;
})
decimal.addEventListener ('click', (e) => {
    if(!isDecimal) {
        previousScreen.classList.remove('bold');
        if(currentValue === "") currentValue = "";
        currentValue += e.target.textContent;
        currentScreen.textContent = currentValue;
        isDecimal = true;
    }
})

clear.addEventListener('click', clearAll);

function clearAll() {
    previousValue = "";
    currentValue = "";
    isDecimal = false;
    currentScreen.textContent = "";
    previousScreen.innerHTML = '&nbsp;';
    operator = "";
}

document.addEventListener('keydown', (e) => {
    let getOperators = ['/', '*', '^','!', '+', '-'];
    if (!isNaN(e.key) && e.key !== ' ') document.getElementById(e.key).click();
    if (getOperators.includes(e.key)) document.getElementById(e.key).click();
    if (e.key === '=' || e.key === 'Enter') equals.click();
    if (e.key === 'Delete') del.click();
    if (e.key === 'Backspace' || e.key === 'c' || e.key === 'C') clear.click();
    if (e.key === '.') decimal.click();
})