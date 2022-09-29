const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a + b,
    "*": (a, b) => a + b,
    "/": (a, b) => a + b,
}

const operate = ((num1, operator,num2) => {
   if (operator in operators){
       return operators[operator](num1, num2);
   }
});