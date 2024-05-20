
/*1-Crie uma função chamada soma que aceita dois parâmetros e retorna a 
soma deles.*/

function soma(a, b){
    return a+b;
}

/*2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e 
não tem nenhum parâmetro nem retorno.*/
    function saudacao(){
        console.log("Olá, mundo!")
    }

/*3-Escreva uma função chamada verificarPar que recebe um número como parâmetro 
e retorna verdadeiro se o número for par e falso caso contrário.*/
function verificarPar(numero){
    if(numero%2===0)
    {
       console.log("É par")
    } 
    else{
       console.log("Não é par")
    }
}
let ff = verificarPar();
console.log(ff)

/*4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo
como parâmetro e retorna a área do círculo.*/
function calcularAreaCirculo(raio){
    return Math.PI * (raio + raio);
}
console.log()

console.log()
/*5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro 
e retorna a data atual.*/
 function retornarDataAtal(){
     return Date();
 }
 let texto = retornarDataAtal();
 console.log(texto)

/*6-Escreva uma função chamada calcularMedia que recebe um array de números 
como parâmetro e retorna a média desses números.*/
function calcularMedia(numeros) {
    let some = 0;
    for (let i = 0; i < numeros.length; i++) {
        some += numeros[i];
    }
    const media = some / numeros.length;
    return media;
}
const meuArray = [10, 20, 30, 40, 50];
const mediaDoArray = calcularMedia(meuArray);
console.log(`A média do array é ${mediaDoArray.toFixed(2)}.`);
console.log(meuArray.length)

/* 7-Crie uma função chamada adicionarDois que aceita um número como parâmetro
 e retorna esse número adicionado a 2. */
function adicionarDois(a){
    return a + 2; 
}
let add = adicionarDois(5);


console.log(add)

/* 8-Defina uma função chamada concatenarStrings que recebe duas strings como
parâmetros e retorna uma nova string que é a concatenação das duas strings 
fornecidas. */
function concatenarStrings(doidera,nego){
    console.log(texto+texto1)
}
concatenarStrings("Olá, Mundo!")

let str = concatenarStrings();
console.log(str)

/* 9-Escreva uma função chamada verificarNegativo que recebe um número como
parâmetro e retorna verdadeiro se o número for negativo e falso caso
contrário. */
function verificarNegativo(numero){
    if(numero < 0 ){
        return true
    }
    else{
        return false
    }
}
let ng = verificarNegativo(4)
console.log(ng);


/* 10-Crie uma função chamada removerEspacos que recebe uma string como 
parâmetro e retorna a mesma string sem espaços em branco. */
function removerEspacos(texto){
    return texto.replace(/\s/g, "")
}
const rm = removerEspacos("rodrigo jesus")
console.log(rm);