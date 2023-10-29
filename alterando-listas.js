//Alterando uma lista com ".splice"

const listaDeMarcas = ['Ford', 'Fiat', 'Acura', 'Haval', 'Toyota', 'Jeep'];

listaDeMarcas.splice(1, 2, "Chevrolet");
//remove 2 elementos do array a partir do índice 1, e adiciona "Chevrolet" no lugar.

console.log(listaDeMarcas);