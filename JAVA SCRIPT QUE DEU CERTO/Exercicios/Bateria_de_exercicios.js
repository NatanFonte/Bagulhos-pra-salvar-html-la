//1: Código: Declare duas variáveis, x e y, e atribua a elas os valores 10 e 20 respectivamente. Em seguida, troque os valores das variáveis. //
var x = 5
var y = 7
console.log("Valor de X: ", x, " Valor de Y:", y)

var x = 10
var y = 20

console.log("Valor atual de X: ", x, " Valor atual de Y", y);

//2. Código: Declare duas variáveis, x e y, e atribua a elas os valores 10 e 20 respectivamente. Em seguida, troque os valores das variáveis. //

const number = 2
const string = "doidera"
const boolean = true

console.log("variável do tipo number: ", number, " Variável do tipo string: ", string,
    "Variável do tipo booleano: ", boolean);

//3. Código: Concatene as strings "JavaScript " e "é divertido!" e imprima o resultado no console.//
let result = "JavaScript, " + " é divertido"
console.log(result);

//4. Código: Declare uma variável num com o valor 10. Em seguida, multiplique esse valor por 3 e imprima o resultado no console.//
const num = 10
console.log("O bagulho deu: ", (num * 3));

//5. Código: Calcule a soma de 10 e 5, e depois subtraia 3 do resultado. Imprima o resultado final no console. //
const cont = 10 + 5

console.log("resultado dessa porra é: ", (cont / 3));

//6. Código: Declare uma variável x com o valor 20. Em seguida, use o operador de atribuição -= para subtrair 5 de x e imprima o resultado no console. //

var x1 = 20
console.log("Resultado dessa outra porra é: ", (x1 -= 5));

//7. Código: Verifique se a variável a é maior que a variável b e imprima o resultado no console. //
const a = 5
const b = 8

if (a > b) {
    console.log("A é maior que B")
}
else {
    console.log("A não é maior que B")
};

//8. Código: Verifique se a variável x é maior que 5 e se y é menor que 15. Imprima true ou false com base na avaliação das duas condições.//

const x2 = 6
const y1 = 4

if (x2 > 5 && y1 < 15) {
    console.log("x é maior que 5 e y é menor que 15")
}
else {
    console.log("x não é maior que 5 não é menor que 15")
};

//9. Código: Crie um array com os valores [1, 2, 3, 4, 5]. Acesse e imprima o terceiro elemento no console.//
let array = [1, 2, 3, 4, 5]
console.log(array[2])

//10. Código: Use um laço for para imprimir os números de 1 a 5 no console.//
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

//11. Código: Use um laço while para imprimir os números de 5 a 1 no console.//
let k = 5;
while (k >= 0) {
    console.log(k);
    k--;
}

//12. Código: Use um laço do while para imprimir os números de 1 a 3 no console.//
let k1 = 0;
while (k1 <= 3) {
    console.log(k1);
    k1++;
}

//13. Código: Escreva um código que verifique se um número é par ou ímpar e imprima a mensagem correspondente.//
var numero5 = 2

if (numero5 % 2 === 0) {
    console.log("É par")
}
else {
    console.log("Não é par")
}

//14. Código: Use o método forEach para imprimir cada elemento de um array multiplicado por 3.//

const numeros2 = [1, 2, 3, 4, 5];

numeros2.forEach(function (numero, indice, array) {
    array[indice] = numero * 3;
});

console.log('Números dobrados:', numeros2);

//15. Código: Escreva um código que usa switch para imprimir o nome do mês com base em um número de 1 a 12.//
const mes = 12;
let diaTexto;

switch (mes) {
    case 1:
        diaTexto = "Janeiro";
        break;
    case 2:
        diaTexto = "Fevereiro";
        break;
    case 3:
        diaTexto = "Março";
        break;
    case 4:
        diaTexto = "Abril";
        break;
    case 5:
        diaTexto = "Maio";
        break;
    case 6:
        diaTexto = "Junho";
        break;
    case 7:
        diaTexto = "Julho";
        break;
    case 8:
        diaTexto = "Agosto";
        break;
    case 9:
        diaTexto = "Setembro";
        break;
    case 10:
        diaTexto = "Outubro";
        break;
    case 11:
        diaTexto = "Novembro";
        break;
    case 12:
        diaTexto = "Dezembro";
        break;
    default:
        diaTexto = "mês inválido";
}
console.log("Hoje é " + diaTexto);

//16. Código: Crie uma classe Pessoa com as propriedades nome e idade. Em seguida, crie uma instância da classe e imprima as propriedades no console.//
class Pessoa {
    constructor(nome6, idade6) {
        this.nome6 = nome6;
        this.idade6 = idade6;
    }
}

var pessoa1 = new Pessoa("Mario", 43)
var pessoa2 = new Pessoa("Rodriga", 32)

console.log(pessoa1)
console.log(pessoa2)

//17. Código: Crie uma classe Carro com uma propriedade marca e um método andar. Crie uma instância da classe e chame o método.//
class Carro {
    constructor(marca) {
        this.marca = marca;
    }
    andar() {
        console.log("Estou andando");
    }
}
var Carrin = new Carro("Toyota")

Carrin.andar();

//18. Código: Declare um objeto literal pessoa com as propriedades nome e idade. Imprima os valores dessas propriedades no console.//
const pessoa = {
    nome: "João",
    idade: 30,
};

console.log(pessoa.nome); 
console.log(pessoa['idade']); 

//19. Código: Declare uma função soma que recebe dois parâmetros e retorna a soma deles. Chame a função e imprima o resultado no console.//
function soma(a1,b1){
    return a1 + b1
}

var a1 = 3
var b1 = 5

console.log(soma(a1,b1));

//20. Código: Crie uma função construtora Animal com a propriedade tipo. Crie uma instância de Animal e imprima a propriedade tipo.//
function Animal(tipo){
    this.tipo
}

var cr = new Animal();
cr.tipo = "Cachorro"

console.log(cr.tipo)


