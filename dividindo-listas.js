//DIVIDINDO UM LISTA

const dadosNumericos = [562, 189, 560, 208, 460, 710, 102, 136, 560, 200];

function verificacao() {

  const grupo1 = dadosNumericos.slice(0, dadosNumericos.length / 2);
  const grupo2 = dadosNumericos.slice(dadosNumericos.length / 2);

  if (grupo1.length === 5 && grupo2.length === 5) {
    return(true);
  } else {
    return(false);
  }

}

console.log(verificacao());