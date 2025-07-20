let img = document.getElementById("img");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let automatic = document.getElementById("automatic");
let intervalId = null;
let tick = 0;

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
    clearInterval(intervalId);

    tick = 0;
    vermelho();

    intervalId = setInterval (() => {
      tick++

      if(tick === 3){
        amarelo()
      }

      if(tick === 4){
        verde()
      }

      if(tick === 7){
        vermelho()
        tick = 0;
      }
    }, 500)
}

red.addEventListener("click", vermelho);
yellow.addEventListener("click", amarelo);
green.addEventListener("click", verde);
automatic.addEventListener("click", automatico);