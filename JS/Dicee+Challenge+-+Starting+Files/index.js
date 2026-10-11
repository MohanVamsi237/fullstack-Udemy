let randomNum1=Math.floor(Math.random()*6)+1;
let randomNum2=Math.floor(Math.random()*6)+1;

let randomDiceImage="dice" + randomNum1 + ".png";
let randomImg ="images/" + randomDiceImage;
let randomDiceImage2="dice" + randomNum2 + ".png";
let randomImg2="images/" +randomDiceImage2;

let img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg);
let img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImg2);


if(randomNum1>randomNum2){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(randomNum2>randomNum1){
    document.querySelector("h1").textContent="Player 2 wins";
}
else{
    document.querySelector("h1").textContent="It's a draw";
}