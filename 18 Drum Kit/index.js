//Exercise 1
// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked");
// }); // applying function to a single button, will be applied to first button encountered in the html skeleton

// below is implementation for applying the event listener to all buttons
// let buttonList = document.querySelectorAll("button");
// for (let i = 0; i<buttonList.length; i++){
//     buttonList[i].addEventListener("click",function(){
//         alert("button " + (i + 1) + " got clicked");
//     })
    
// }

// Exercise 2 - Higher order functions
function add(num1,num2){
    return num1 + num2;
}

function multiply(num1,num2){
    return num1*num2;
}


function subtract(num1,num2){
    return num1 - num2;
}

function divide(num1,num2){
    return num1/num2;
}

function calculator(num1,num2,operator){ // Example of higher order functions - we pass a function as a parameter for another function (in this case oeprator is a stand-in for the various other function calls that exist)
    let a = operator(num1,num2);
    console.log(a);
}