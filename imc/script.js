function calcule(){
    let nome = document.getElementById("nome");
    let altura = document.getElementById("altura");
    let peso = document.getElementById("peso");
    let resultado = document.getElementById("resultado");

    if(nome.value.length == 0 || altura.value.length == 0 || peso.value.length == 0){
        alert("[ERRO] Verifique os dados e tente novamente");
    }else{
        let nom = (nome.value);
        let alt = Number(altura.value);
        let pes = Number(peso.value);

        let calc = (pes / (alt * alt)).toFixed(2);

        let classificacao = "";

        if(calc < 18.5){
            classificacao = "abaixo do peso.";
        }else if(calc < 25){
            classificacao = "com o peso ideal."
        }else if(calc < 30){
            classificacao = "levemente acima do peso."
        }else if(calc < 35){
            classificacao = "com obesidade grau 1."
        }else if(calc < 40){
            classificacao = "com obesidade grau 2."
        }else{
            classificacao = "com obesidade grau 3."
        }
        resultado.innerHTML = `${nom} seu IMC é ${calc} e você está ${classificacao}`
    }
}