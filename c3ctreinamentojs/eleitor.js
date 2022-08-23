//definir o números total de eleitores de um municipio, a quantidade 
// de votos válidos, votos em branco e nulos e dizer a quantidade
// desses votos

//let votosTotais = 5000;
let votosBrancos = 1000;
let votosNulos = 500;
let votosValidos = 3500;
let votosTotais = votosBrancos + votosValidos + votosNulos;//outra opção de fazer com essa e ficar o mesmo resultado que a 1 

let porcValidos =  (votosValidos/votosTotais) * 100;
let porcBrancos = (votosBrancos/votosTotais) * 100;
let porcNulos = (votosNulos/votosTotais) * 100;

console.log(`Válidos: ${porcValidos}%`);
console.log(`Nulos: ${porcNulos}%`);
console.log(`Brancos: ${porcBrancos}%`);