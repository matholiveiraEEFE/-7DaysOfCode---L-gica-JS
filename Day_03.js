const area = prompt
("Qual área gostaria de seguir, Front-end ou Back-end?");
const erro_area = ("Você não digitou uma das áreas corretamente!");


if (area === "Front-end"){
    const resp_front = prompt("Gostaria de aprender mais sobre React ou Vue?");

}else if (area === "Back-end"){
    const resp_back = prompt("Gostaria de aprender mais sobre C# ou Java?");
} else {
    alert (erro_area);
}

const especializar = prompt 
("Digite 1: Se gostaria de seguir se especializando ou Digite 2: Seguir se desenvolvendo para se tornar Fullstack?");

if (especializar === "1") {
    alert ("Parabéns continue se especializando, terá uma otima carreira pela frente");
}else if (especializar === "2"){
    alert ("Parabéns, Fullstack é uma carreira brilhante para seguir!");
}


let gostaria = prompt ("Gostaria de aprender mais alguma tecnologia? SIM ou NÃO"); 

if(gostaria === "NÃO"){
     alert ("Poxa!");
}while (gostaria === "SIM"){
    const aprender = prompt ("Qual a tecnologia que gostaria de se especializar?");
    gostaria = prompt ("Gostaria de aprender mais alguma tecnologia? (1) SIM ou (2) NÃO"); 
    }

alert ("Continue estudo essa tecnologia é espetacular");
