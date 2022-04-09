// VARIÁVEIS GLOBAIS

let numeroDeCartas;

let cartaVirada = 0;

let localCarta1;

let localCarta2;

let carta1;

let carta2;

let acertos = 0;

let jogadas = 0;

let segundos = 0;

let minutos = 0;

let horas = 0;

let contar;



//CRONOMETRO

function timer(){
    let acharTempo = document.querySelector(".relogio")
    
    if(segundos<59){
        segundos ++
    }
    else{
        segundos = 0;
        minutos++
    }

    acharTempo.innerHTML = minutos + " : " + segundos;
}

function cronometro(){
    contar = setInterval(timer,1000)
}



// FUNÇÃO PARA DETERMINAR O NÚMERO DE CARTAS

function comparador() { 
	return Math.random() - 0.5; 
}

function quantidadeCartas(){

    let contador = 0;

    let cartas = Number(prompt("Quantas cartas"))

    while (cartas < 4){

        cartas = Number(prompt("Quantas cartas"));

    }

    while (cartas > 14){
        cartas = Number(prompt("Quantas cartas"));
    }

    while (cartas%2 !== 0){

        cartas = Number(prompt("Quantas cartas"));

    }

    numeroDeCartas = cartas;

    const gif = [
    'bobrossparrot.gif','bobrossparrot.gif',
    'explodyparrot.gif','explodyparrot.gif',
    'fiestaparrot.gif','fiestaparrot.gif',
    'metalparrot.gif','metalparrot.gif',
    'revertitparrot.gif','revertitparrot.gif',
    'tripletsparrot.gif','tripletsparrot.gif',
    'unicornparrot.gif','unicornparrot.gif'
    ]

    let array = []

    for(let i = 0; i<cartas;i++){
        array.push(gif[i])
    }

    let embaralhado = array.sort(comparador)

    while(contador<cartas){

        const local = document.querySelector(".cartas")

        local.innerHTML += '<div class="carta" onclick="virarCarta(this)"><div class="verso face"><img src="/Imagens/'+embaralhado[contador]+'"></div><div class="frente face"><img src="/Imagens/front.png"></div></div>'

        contador ++;
    }

    embaralhado = []

    cronometro()
}



// FUÇÃO PARA VIRAR AS CARTAS

function virarCarta(item){

    const temFlip = item.classList.contains("girar")

    const estaVirada = item.classList.contains("virada")

    if (cartaVirada === 0 && estaVirada === false){
        cartaVirada = cartaVirada + 1;


        if(temFlip === false){
            item.classList.add("girar")
            item.classList.remove("retomar")

            item.classList.add("virada")

            localCarta1 = item;

            carta1 = item.innerHTML

            cartaVirada ++

            jogadas++
        }
    }
    else{
        if(cartaVirada !== 0 && estaVirada === false){

            item.classList.add("girar")
            item.classList.remove("retomar")
            item.classList.add("virada")

            localCarta2 = item;
    
            carta2 = item.innerHTML

            if(carta2 == carta1){
                setTimeout(acertou,1000)
        
            }
        
            else{
                console.log("Errou")
                setTimeout(errou,1000)
        
            }
    
            cartaVirada = 0;
            carta1 = ""
            carta2 = ""
            jogadas++
        }
    }

}

// ACERTOU E ERROU

function acertou(){
    acertos += 2;
    let result = numeroDeCartas-acertos

    if(result<2){
        alert("PARABÉNS!!! \nVocê ganhou em " + jogadas + " jogadas \n" +
         "Seu tempo foi de:\n" +
         minutos +" minutos"+ " e " + segundos + " segundos")
        clearInterval(contar)
        segundos = 0;
        const reiniciar = prompt("Quer jogar novamente? sim ou nao")
        const local = document.querySelector(".cartas")

        if(reiniciar==="sim"){

            let nodeList = document.querySelectorAll(".girar")

            for(let i=0; i< nodeList.length ;i++){
                const retirar = document.querySelector(".girar")
                retirar.classList.remove("girar")
                retirar.classList.remove("virada")
            }

            let acharTempo = document.querySelector(".relogio")
            acharTempo.innerHTML = 0 + " : " + 0

            acertos = 0;
            jogadas = 0;
            segundos = 0;
            minutos = 0;
            local.innerHTML = ""

            quantidadeCartas()
        }
        else{
            alert("Obrigado por jogar!")
            local.innerHTML = ""
            let acharTempo = document.querySelector(".relogio")
            acharTempo.innerHTML = 0 + " : " + 0
        }
    }
    
}

function errou(){
    localCarta1.classList.add("retomar")
    localCarta1.classList.remove("girar")
    localCarta1.classList.remove("virada")

    localCarta2.classList.add("retomar")
    localCarta2.classList.remove("girar")
    localCarta2.classList.remove("virada")
}


// CHAMAR AS FUNÇÕES

quantidadeCartas()