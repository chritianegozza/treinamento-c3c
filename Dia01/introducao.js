/*console.log("Olá Mundo");
{
    console.log("Executado dentro do bloco");
}
*/

/*
//exemplo se criar uma variavel do tipo string, devo declara o tipo se eu for mudar, senão poderá dá erro usar um number com var string
nome = "chris"; //string
console.log(nome);
nome = 17; //number 
console.log(nome);
*/

/*// Js é uma linguagem case sensetive irá ter diferença em letras maiúscula e minuscula 
var nomeCompleto = "Christiane Gozza"; //var saiu em desuso devido ser considerado uma var global e é ruim para o codigo 
//console.log(nomecompleto); //irá dá erro se fizer assim
console.log(nomeCompleto);
*/

/*let é var que está sendo criando que dentro do scorpo e ela pode ser global ou não, depende dá aonde é criada
let nomeCompleto = "Christiane Gozza"; // Aqui ela foi criada fora do bloco, então é uma va global
{
    let nomeCompleto = "Paula Fernanda"; //Aqui ela foi criada em uma estrutura de bloco, vira uma var especifica desse bloco
    console.log(nomeCompleto);  
}
console.log(nomeCompleto);
*/

/**
 * 
 * Comentário em 
 * várias linhas
 * de codigo
 */


//console.error("È muito triste");//mostra message de erro no console. Somente no browser


//let nome = "christiane"; // Armazena o valor christiane na variável nome


//Constantes ela não muda o valor que está armazenado dentro
//Boas práticas é usar a const com letras maisculas 
/*const PI = 3.14; //somente com valores fixo usar o const 
console.log(PI); 
*/


/*typeof tipo de dados armazenados na váriavel
let numeroInteiro = 17;
let numeroDecimal = 3.898;
let nome = "Arthur"; 
//console.log(typeof(numeroInteiro));//estou usando o tipo number aqui
//console.log(typeof(nome));//irá mostrar que o nome é uma string 
console.log(isNaN(nome)); //NAN - Not a Number//Aqui mostra que é verdadeiro 
*/

//Concatenação (unir) quando você tem como propósito unir (concatenar) objetos do tipo String ou Array
/*let nome = "Christiane";
console.log("Meu nome é: " + nome); 
console.log("A soma de 5 + 9 é: " + (5+9)); //irá concratenar 
console.log((5*(4+32)));//Aqui temos uma conta 
*/

//Template strings
let nome = "Christiane";
let message = `Olá, meu nome é: ${nome} tenho 37 anos...`;
console.log(message);//Outra forma de fazer o template string
//console.log(`Olá, meu nome é ${nome} tenho ${37} anos...`); //exemplo de string template