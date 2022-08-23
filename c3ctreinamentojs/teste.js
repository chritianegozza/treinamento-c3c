let teste = 17;

if(teste > 20) { // condição lógica -> True/ False
    console.log("Maior que 20");
}else{
    console.log("Não é maior que 20");

}

/*
 *     >  -> Maior que
       <   -> Menor que
       >=  -> Maior ou igual
       <=  -> Menor ou igual
       ==  -> Igualdade  
*/


//pode ou não se alistar

let idade = 18;

if(idade > 18) { // condição lógica -> True/ False
    console.log("Já pode se alistar");
}else{
    console.log("Não pode se alistar");

}
console.log("OK");

//sexo e idade
let idadeAlistar = 18;
let sexo = "f";
if(idadeAlistar >= 18 && sexo == "m") { // condição lógica -> True/ False
     console.log("Você deve se alistar!");   
}else if(sexo == "f" && idadeAlistar >=18){
    console.log("Alistamento opcional!");
}else{
    console.log("Não pode se alistar");
}
console.log("OK");