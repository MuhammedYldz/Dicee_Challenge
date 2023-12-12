var list = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

var n = Math.random();
n = n * 6;
n= Math.floor(n);


var m = Math.random();
m = m * 6;
m= Math.floor(m);

document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.srcset = "./images/"+list[n] ;
document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.srcset = "./images/"+list[m];

if(n>m){
    document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins!";
}
else if(m>n){
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins!"
}
else{
    document.getElementsByTagName("h1")[0].textContent = "Draw"
}