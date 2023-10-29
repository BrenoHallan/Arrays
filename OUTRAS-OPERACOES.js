const array = [462, 892, 230, 107];

array.push(590);


//somar numeros de um array com "for"
let soma = 0;

function somar() {
  for (let i = 0; i < array.length; i = i + 1) {
    soma = soma + array[i];
  }
}

let resultado = somar();

console.log(`A soma de todos os números da lista é ${resultado}`);