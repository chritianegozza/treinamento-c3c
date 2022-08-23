//As notas de um aluno, calcular a média aritmédica e dizer 
// se o aluno foi aprovado ou não com uma mensagem de apoio

let n1 = 7.5;
let n2 = 9.0;
let media = (n1 + n2) / 2;

console.log(`Sua nota final foi: ${media}`);

if (media >= 7) {
    if(media == 10) {
        console.log('Pense como se garatiu!!!');
    }else if(media > 8){
        console.log('Parabéns, você foi sensacional!!!');
    }else{
        console.log('Você passou, mas gostaria que repetisse o capítulo!!!');

    }
}else{
    console.log('Infelizmente terá que refazer o teste!!!');

}
