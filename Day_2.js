const nome = prompt ("Qual seu nome?");
const idade = prompt ("Quantos anos você tem?");
const linguagem = prompt ("Qual linguagem de programação você está aprendendo?");

const msg = `Olá ${nome}, vocé tem ${idade} anos 
e já está aprendendo ${linguagem}!`;

alert(msg);

const msg_positiva = 
'Muito bom! continue estudando e você terá muito sucesso.';

const msg_negativa = 
'Ahh que pena... Já tentou aprender outras linguagens?';

const erro = 'Você não digitou 1 ou 2';

const gostarDaLinguagem = prompt 
("Você gosta de estudar ? Responda com número 1 para SIM e 2 para NÃO.");

    if (gostarDaLinguagem == 1 ){
        alert (msg_positiva);
    }
    if (gostarDaLinguagem == 2){
        alert  (msg_negativa);
    }else {
        alert (erro)
    }


