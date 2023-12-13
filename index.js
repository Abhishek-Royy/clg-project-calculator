// // let input = document.getElementById('input');
// // let buttons = document.querySelectorAll('button');
// // let maths=document.querySelectorAll('math')

// // let string = "";
// // let arr = Array.from(buttons);
// // arr.forEach(button => {
// //     button.addEventListener('click', (e) => {
// //         if (e.target.innerHTML == '=') {
// //             string = eval(string);
// //             input.value = string;

// //         }

// //         else if (e.target.innerHTML == 'AC') {
// //             string = "";
// //             input.value = string;
// //         }

// //         else if (e.target.innerHTML == 'DEL') {
// //             string = string.substring(0, string.length - 1);
// //             input.value = string;
// //         }

// //         else {
// //             string += e.target.innerHTML;
// //             input.value = string;
// //         }

// //     })
// // })

// Get the input field and buttons
let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let string = "";

const handleOperation = (operator) => {
  string += operator;
  input.value = string;
};

// Function to calculate scientific functions
const calculateScientific = (functionName) => {
  let number = parseFloat(string);
  switch (functionName) {
    case "sin":
      string = Math.sin(number);
      break;
    case "cos":
      string = Math.cos(number);
      break;
    case "tan":
      string = Math.tan(number);
      break;
    case "sqrt":
      string = Math.sqrt(number);
      break;
    case "exp":
      string = Math.exp(number);
      break;
    default:
      break;
  }
  input.value = string;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else if (e.target.classList.contains("operator")) {
      handleOperation(e.target.innerHTML);
    } else if (e.target.classList.contains("scientific")) {
      calculateScientific(e.target.innerHTML);
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
