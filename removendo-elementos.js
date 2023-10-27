//REMOVENDO ELEMENTOS DA LISTA

const lista = [7, 5, 6, 0, 9];

lista.pop(); //o atributo "pop" remove um elemento do final de uma lista

function calcular() {
  const operacao = (lista[0] + lista[1] + lista[2] + lista[3] + lista[4]) / lista.length;

  if (lista.length > 5 || lista.length < 5) {
    console.error("IMPOSSÍVEL CALCULAR - A lista deve ter 5 elementos!")
  } else {
    return(operacao);
  }
}

console.log(lista);

console.log(calcular());