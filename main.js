function comparador() { 
	return Math.random() - 0.5; 
}

function quantidadeCartas(){

    let contador = 0;

    let cartas = Number(prompt("Quantas cartas"))

    while (cartas < 4){

        cartas = Number(prompt("Quantas cartas"));

    }

    while (cartas > 12){
        cartas = Number(prompt("Quantas cartas"));
    }

    while (cartas%2 !== 0){

        cartas = Number(prompt("Quantas cartas"));

    }

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
}


function virarCarta(item){

    const temFlip = item.classList.contains("girar")

    if(temFlip === false){
        item.classList.add("girar")
        item.classList.remove("retomar")

    }
    else{
        item.classList.add("retomar")
        item.classList.remove("girar")
    }

}

function selecionarCarta(elemento){
    const imagem = ['unicornparrot.gif','revertitparrot.gif']

    elemento.classList.add("virada")
    elemento.classList.add("carta-selecionada")
    elemento.innerHTML = '<img src="/Imagens/'+imagem[1]+'"></img>'

    const verCartasViradas = document.querySelectorAll(".virada")
    alert(verCartasViradas.innerHTML)
}

quantidadeCartas()

// const gif = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif']

// let m = gif.sort();