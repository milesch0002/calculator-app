const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const numbers = document.getElementsByClassName("number");
const operator = document.getElementsByClassName("operators");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

buttons.forEach(button => button.addEventListener("click", () => calculate(button)))

let arr = [];
let expression;

function calculate(button) {

    clear.addEventListener("click", function() {
        arr = [];
        display.textContent = "";
    });

    equals.addEventListener("click", function() {
        expression = ""
        console.log(arr)
        for (let i = 0; i < arr.length - 1; i++) {
           expression += arr[i]
        }
        console.log(expression)
        console.log("hello")
        display.textContent = eval(expression);
        
    });


    arr.push(button.textContent);
    expression = arr.join("");
    display.textContent = expression;
    console.log(arr);


    console.log(button.textContent);

}






