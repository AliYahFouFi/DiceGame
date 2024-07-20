var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImg1= "./images/dice"+randomNumber1+".png";
var randomImg2= "./images/dice"+randomNumber2+".png";

var img1= document.querySelector(".img1");
var img2= document.querySelector(".img2");

img1.setAttribute('src', randomImg1 )
img2.setAttribute('src', randomImg2 )

