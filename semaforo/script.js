let img = document.getElementById("img");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let automatic = document.getElementById("automatic");

function vermelho(){
  img.src = './imagem/vermelho.png'
}

function amarelo(){
    img.src = './imagem/amarelo.png'
}

function verde(){
    img.src = './imagem/verde.png'
}

function automatico(){
    
}

red.addEventListener("click", vermelho);
yellow.addEventListener("click", amarelo);
green.addEventListener("click", verde);
automatic.addEventListener("click", automatico);