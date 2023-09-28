// Quick Sort

const listaLivros = require("../aula2/array");
const trocaLugar = require("./encontraMenores");

function quickSort(array, posicaoInicial, posicaoFinal) {
    
    if (array.length > 1) {
        let indiceAtual = particiona(array, posicaoInicial, posicaoFinal);
        if (posicaoInicial < indiceAtual - 1) {
            quickSort(array,posicaoInicial,indiceAtual - 1);
        }
        if (indiceAtual < posicaoFinal) {
            quickSort(array, indiceAtual, posicaoFinal)
        }
    }
    return array;
}

function particiona(array, posicaoInicial, posicaoFinal) {
    console.log('array', array);
    console.log('posicaoInicial', 'posicaoFinal', posicaoInicial, posicaoFinal);
    let pivo = array[Math.floor((posicaoInicial + posicaoFinal) / 2)]
    let atualEsquerda = posicaoInicial; //0
    let atualDireita = posicaoFinal;    //10

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }

        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita ) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}


console.log(quickSort(listaLivros, 0, listaLivros.length - 1))