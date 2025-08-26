let a = Math.floor(Math.random() * 6) + 1;
let b = Math.floor(Math.random() * 6) + 1;

let img1 = document.querySelector(".img1");
img1.setAttribute("src", "./images/dice"+ a +".png");
let img2 = document.querySelector(".img2");
img2.setAttribute("src", "./images/dice"+ b +".png");
let title = document.querySelector("h1");
if (a>b){
    title.innerHTML = "Player 1 Wins";
}
else if (b>a){
    title.innerHTML = "Player 2 Wins";
}
else{
    title.innerHTML = "Draw!!!";
}