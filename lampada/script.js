const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const lamp = document.getElementById("lamp");
const res = document.getElementById("res");

function quebrou(){
    return lamp.src.indexOf('quebrada') > -1;
}

function ligarLamp(){
    if(!quebrou()){
        lamp.src = './imagens/ligada.jpg'
    }else{
        res.innerHTML = "A Lâmpada está quebrada!"
    }
}

function desligarLamp(){
    if(!quebrou()){
        lamp.src = './imagens/desligada.jpg'
    }else{
        res.innerHTML = "A Lâmpada está quebrada!"
    }
}

function quebrarLamp(){
    lamp.src = './imagens/quebrada.jpg'
}

ligar.addEventListener("click", ligarLamp);
desligar.addEventListener("click", desligarLamp);
lamp.addEventListener("mouseover", ligarLamp);
lamp.addEventListener("mouseleave", desligarLamp);
lamp.addEventListener("dblclick", quebrarLamp);