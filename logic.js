const buttons = document.querySelectorAll('.number');
const screen = document.querySelector('.screen');
for (let i = 0; i<buttons.length;i++){
    buttons[i].addEventListener("click",() =>{
        let displayValue = screen.textContent = buttons[i].textContent;
    });
}


// <== functions for basic math start ==>
const addition = (a, b) => {
    return a + b
};
const subtraction = (a, b) => {
    return a - b
};
const division = (a, b) => {
    return a / b
};
const multiply = (a, b) => {
    return a * b
};

// <== functions for basic math end ==>

function operate(a, oper, b) {
    if (oper === "+") {
        return addition(20, 30);
    } else if (oper === "-") {
        return subtraction(20, 30)
    } else if (oper === "/") {
        return division(20, 30)
    } else if (oper === "*") {
        return multiply(20, 30)
    }
}

