/**
 * Faça um algoritmo para ler: quantidade atual em estoque, 
 * quantidade máxima em estoque e quantidade minima em estoque
 * de um produto.
 * Calcular e escrever a quantidade média
 * ((quantidademédia = quantidade máxima + quantidade mínima)/2);
 * Se a quantidade em estoque for maior ou igual a quantidade média 
 * escrever a mensagem 'Não efetuar compra ', senão escever mensagem 'Efetuar compra'.

**/


let quantidadeMaxima = 100;
let quantidadeMinima = 50;
let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) /2;
let quantidadeAtual = 40;
if(quantidadeAtual >= quantidadeMedia){
    console.log("Não efetuar a compra");
}else{
    console.log("Efetuada com sucesso");
}