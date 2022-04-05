function quantidadeCartas(){

    let cartas = Number(prompt("Quantas cartas"))

    while (cartas%2 !== 0){

        cartas = Number(prompt("Quantas cartas"))

    }

    while (cartas<4){

        cartas = Number(prompt("Quantas cartas"))

    }

    while (cartas>14){
        cartas = Number(prompt("Quantas cartas"))
    }

    alert("O numero de cartas é: " + cartas)
}

quantidadeCartas();