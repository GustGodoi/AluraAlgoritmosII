// Busca binária

// A busca binária segue a melhor lógica para buscar um valor no meio de uma coleção
// sempre dividindo a coleção em duas partes até encontrar o valor

const listaLivros = require("./arrayOrdenado");

function busca(array, indiceDe, indeiceAte, valorBuscado) {
    const meio = Math.floor((indiceDe + indeiceAte) / 2);
    const atual = array[meio];

    if (indiceDe > indeiceAte) {
        return -1;
    }

    if (valorBuscado === atual.preco) {
        return meio;
    } else if (valorBuscado < atual.preco) {
        return busca(array, indiceDe, meio - 1, valorBuscado);
    } else {
        return busca(array, meio + 1, indeiceAte, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 60))