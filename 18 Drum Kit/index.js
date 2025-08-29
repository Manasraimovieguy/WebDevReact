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
// function add(num1,num2){
//     return num1 + num2;
// }

// function multiply(num1,num2){
//     return num1*num2;
// }


// function subtract(num1,num2){
//     return num1 - num2;
// }

// function divide(num1,num2){
//     return num1/num2;
// }

// function calculator(num1,num2,operator){ // Example of higher order functions - we pass a function as a parameter for another function (in this case oeprator is a stand-in for the various other function calls that exist)
//     let a = operator(num1,num2);
//     console.log(a);
// }


//Exercise 3 - Playing a sound, this was fun
// let buttonList = document.querySelectorAll("button");
// for (let i = 0; i<buttonList.length; i++){
//     buttonList[i].addEventListener("click",function(){
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play()
//     })
    
// }

//Exercise 4 - using 'this' to change color of text on click
// let buttonList = document.querySelectorAll("button");
// for (let i = 0; i<buttonList.length; i++){
//     buttonList[i].addEventListener("click",function(){
//         this.style.color = "black";
//     })
    
// }

//Exercise 5 - using switch in javascript to assign audio clips to each part of drum kit
// let buttonList = document.querySelectorAll("button");
// for (let i = 0; i<buttonList.length; i++){
//     buttonList[i].addEventListener("click",function(){
//         let drumName = this.innerHTML;
//         switch (drumName){
//             case "w":
//                 var audio = new Audio("sounds/tom-1.mp3");
//                 audio.play()
//                 break;
//             case "a":
//                 var audio = new Audio("sounds/tom-2.mp3");
//                 audio.play()
//                 break;
//             case "s":
//                 var audio = new Audio("sounds/tom-3.mp3");
//                 audio.play()
//                 break;
//             case "d":
//                 var audio = new Audio("sounds/tom-4.mp3");
//                 audio.play()
//                 break;
//             case "j":
//                 var audio = new Audio("sounds/snare.mp3");
//                 audio.play()
//                 break;
//             case "k":
//                 var audio = new Audio("sounds/crash.mp3");
//                 audio.play()
//                 break;
//             case "l":
//                 var audio = new Audio("sounds/kick-bass.mp3");
//                 audio.play()
//                 break;
//         }
//     })
    
// }

//Exercise 6 - using javascript constructors for objects

// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){ //this is a constructor that declares the HouseKeeper
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
//     this.clean = function(){ // you can create methods in js objects as well
//         alert(this.name + " is cleaning");
//     }
// }

// let houseKeeper1 = new HouseKeeper(12,"Jane",["bathroom","lobby","bedroom"]);
// let houseKeeper2 = new HouseKeeper(95,"Julianne",["living room", "nursing homes", "tubs"]);
// console.log(houseKeeper1);
// console.log(houseKeeper2);
// let houseKeeper3 = new HouseKeeper(43,"Manas",["plumbing", "depression", "laziness"]);
// houseKeeper3.clean();


//Exercise 7 - using js to explore keyboard events for drum kit

function drumKitMapping(keyString){
    switch (keyString) {
        case "w":
            buttonAnimate(keyString);
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play()
            break;
        case "a":
            buttonAnimate(keyString);
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play()
            break;
        case "s":
            buttonAnimate(keyString);
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play()
            break;
        case "d":
            buttonAnimate(keyString);
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play()
            break;
        case "j":
            buttonAnimate(keyString);
            var audio = new Audio("sounds/snare.mp3");
            audio.play()
            break;
        case "k":
            buttonAnimate(keyString);
            var audio = new Audio("sounds/crash.mp3");
            audio.play()
            break;
        case "l":
            buttonAnimate(keyString);
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play()
            break;
        default: 
            console.log();
            break;
    }
}

let buttonList = document.querySelectorAll("button");
for (let i = 0; i<buttonList.length; i++){
    buttonList[i].addEventListener("click",function(){
        let drumName = this.innerHTML;
        // buttonAnimate(drumName); 
        drumKitMapping(drumName);
    })
    
}

document.addEventListener("keydown", function(event){
    // buttonAnimate(event.key); I put these calls in the switch cases to avoid the console errors in the instance we press keys that aren't in the switch cases
    drumKitMapping(event.key);
})

function buttonAnimate(currentNote){
    let activeNote = document.querySelector("." + currentNote);
    activeNote.classList.add("pressed");

    setTimeout(function(){
        activeNote.classList.remove("pressed");

    }, 100)

}
