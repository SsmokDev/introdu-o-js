const olaMundo = 'Ola mundo, introdução a Js';
const dataAtual = new Date();

console.log('Olá Mundo, introdução a JS!');
console.log(`Data hora: ${dataAtual}`);

function mensagem(mensagem) {
    alert('mensagem');
}

function mensagem2(){
    mensagem('Aprendendo funções');
}

const mensagemFinal = (mensagemFinal) =>{
    console.log(mensagemFinal);
}

const verdaderio = true;
const naoVerdadeiro = !verdaderio;

const tudoEVerdadeiro = verdaderio && naoVerdadeiro;
const tudoEFalso = !verdaderio && naoVerdadeiro;
const algumEVerdadeiro = verdaderio || naoVerdadeiro;
const algumEFalso = verdaderio || naoVerdadeiro;

//console.log('verdadeiro', verdaderio);
//console.log('naoVerdadeiro', naoVerdadeiro);
//console.log('tudoEVerdadeiro', tudoEVerdadeiro);
//console.log('tudoEFalso', tudoEFalso);
//console.log('algumEVerdadeiro', algumEVerdadeiro);
//console.log('algumEFalso', algumEFalso);