//Efectuei duas alteraçoes com pesquisa na net
//O conteudo do Ecra nao ultrapassa ou 14 caracteres
//Apenas é permitido colocar 3 digitos apos o ponto
//O que vai permitir um numero com 10 digitos e 3 casas decimais


//Variaveis Globais

var ecra = document.querySelector("#ecra");
var saida = document.querySelector("#saida");


function digitar(digito){
    //Variaveis Locais
    let posicaoPonto = ecra.innerHTML.indexOf(".");

    //executar

    //1ª alteraçao: limita a funçao a 14 caracteres
    if (ecra.innerHTML.length >= 12){
        return;
    }

    if(digito == "."){
        if(!ecra.innerHTML.includes(".")){
            ecra.innerHTML += digito;
        }
    }
    else if(digito == "-"){
        if(ecra.innerHTML.length == 0){
            ecra.innerHTML += digito;
        }
    }
    //2ª alteraçao: limita a 3 o separador decimal
    else if(!isNaN(digito)){
        if(posicaoPonto == -1 || (ecra.innerHTML.length - posicaoPonto) - 1 < 3){ 
            ecra.innerHTML += digito;
        }
    }

    // else{
    //     ecra.innerHTML += digito;
    // }

    calcular();

}

function limpar(){
    //Executar
    ecra.innerHTML = "";
    saida.innerHTML = "";
}

function calcular(){
    //Variaveis Locais
    let valor = parseFloat(ecra.innerHTML);

    //Executar
    if(!isNaN(valor)){
        saida.innerHTML = `${valor.toFixed(2)} C = ${(valor * 1.8 + 32).toFixed(2)} F<br>`
        saida.innerHTML += `${valor.toFixed(2)} C = ${(valor + 273.15).toFixed(2)} K`
    }
    else{
        saida.innerHTML = "";
    }

}