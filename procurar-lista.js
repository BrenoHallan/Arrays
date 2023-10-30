const alunos = ["Flávio", "Marcelo", "Breno", "Bruna", "Janaina"];
const medias = [321, 260, 998, 682, 852];

const listaDeCadastro = [alunos, medias];

function exibir(aluno) {
  
  if (listaDeCadastro[0].includes(aluno)) {
    
    console.log(`${aluno} está cadastrado(a)!`);
    const indice = listaDeCadastro[0].indexOf(aluno);

    const mediaAluno = listaDeCadastro[1][indice];
    console.log(`Nota ${medias[indice]}`);

  } else {
    
    console.log("Esse aluno não possui cadastro no sistema!");

  }


}

//exibir("Marcela");



//OUTRO EXEMPLO
//Neste exemplo, vamos ver se o aluno está cadastrado e se a nota desse aluno é sufuciente para a aprovação.

const nomesAlunos = ["Jovem", "Moça", "Rapaz", "Menor"];
const notasAlunos = [56, 86, 98, 82];

function encontrarAlunoENotas(aluno) {
  
  const indiceAluno = nomesAlunos.indexOf(aluno);

  if (indiceAluno !== -1) {

    const nota = notasAlunos[indiceAluno];
    console.log(`Aluno: ${aluno}`);
    console.log(`Nota: ${nota}`);

    if (nota >= 60) {
      console.log("Situação: APROVADO");
    } else {
      console.log("Situação: RETIDO");
    }

  } else {

    console.log("Este aluno não está cadastrado!");
    
  }
}

//encontrarAlunoENotas("Jovem");




//MAIS UM EXEMPLO
//vamos ver se o aluno está cadastrado e se a nota desse aluno é sufuciente para a aprovação. Adicione nessa lista mais dois alunos e suas respectivas notas.

const alunos_ = ["Edivaldo", "Sérgio", "Marciana", "Sofrêncio"];
const notas_ = [7.5, 6.8, 5.7, 9,8];

alunos_.push("Marco", "Carlito");
notas_.push(8.7, 10);

const listaCadastro = [alunos_, notas_];

function exibirAlunoNota(aluno) {

  if (listaCadastro[0].includes(aluno)) {

    console.log(`${aluno} está cadastrado`);

    const indiceAlunoCadastrado = listaCadastro[0].indexOf(aluno);

    const notaDoAluno = listaCadastro[1][indiceAlunoCadastrado];
    
    console.log(`Média: ${notaDoAluno}`);

    if (notaDoAluno >= 6) {
      console.log("Situação: APROVADO");
    } else {
      console.log("Situação: REPROVADO");
    }

  } else {

    console.log(`${aluno} não possui cadastro no sistema.`);

  }

}

exibirAlunoNota("Edivaldo");

















