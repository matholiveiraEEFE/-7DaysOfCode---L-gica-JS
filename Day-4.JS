/*Você deve criar um programinha que comece com um valor específico pré-definido
entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).*/

const numero = 7;

alert ("Isso é um jogo de adivinhação de números de 1 até 10");

for (let repeticao = 0;repeticao < 3; repeticao++){
    adivinha = prompt ("chute um numero de 0 a 10:");
    if(adivinha == numero){
        alert ('Você acertou o numero, Parabéns');
    } else {
        alert ("Numero errado");}}
if(adivinha != numero){
    alert(`Você não acertou. O número era ${numero}!`);
}

/*Depois que o programinha estiver funcionando, 
tente usar um número randômico em vez de um número pré-definido.*/

const numero = Math.floor(Math.random() * (10 - 1 + 1) + 1);

alert ("Isso é um jogo de adivinhação de números de 1 até 10");

for (let repeticao = 0;repeticao < 3; repeticao++){
    adivinha = prompt ("chute um numero de 0 a 10:");
    if(adivinha == numero){
        alert ('Você acertou o numero, Parabéns');
    } else {
        alert ("Numero errado");}}
if(adivinha != numero){
    alert(`Infelizmente, você não acertou. O número era ${numero}!`);
}

