const buttons = document.querySelectorAll('.number');//number buttons
const operators = document.querySelectorAll('.operator')// operator buttons
const screen = document.querySelector('.screen');
let displayValue = 0;
for (let i = 0; i<buttons.length;i++){ // loop through number buttons and display on click
    buttons[i].addEventListener("click",() =>{
          displayValue = parseInt(screen.textContent += buttons[i].textContent);
    });
}
for (let i = 0; i<operators.length; i++){
    operators[i].addEventListener('click', ()=>{
        console.log(operators[i])
       if (operators[i].textContent === "+"){ // check if pressed button is + (addition)
           screen.textContent = '';
           screen.textContent = operate(displayValue,"+", 1);
           displayValue = 0;
       }
       else if (operators[i].textContent === "-"){// check if pressed button is - (subtraction)
           screen.textContent = '';
           screen.textContent = operate(displayValue,"-", 1);
           displayValue = 0;
        }
       else if (operators[i].textContent === "÷"){// check if pressed button is + (division)
           screen.textContent = '';
           screen.textContent = operate(displayValue,"÷", 2);
           displayValue = 0;
       }
       else if (operators[i].textContent === "x"){// check if pressed button is + (multiplication)
           screen.textContent = '';
           screen.textContent = operate(displayValue,"x", 2);
           displayValue = 0;
       }

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
        return addition(a,b);
    } else if (oper === "-") {
        return subtraction(a,b)
    } else if (oper === "÷") {
        return division(a,b)
    } else if (oper === "x") {
        return multiply(a,b)
    }
}

