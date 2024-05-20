/*
Exercício 1: Criação de Classe
Crie uma classe Pessoa com as propriedades nome e idade. 
Em seguida, crie dois objetos pessoa1 e pessoa2 dessa classe e imprima suas informações no console. */

/* Exercício 2: Adição de Método
Adicione um método cumprimentar() à classe Pessoa, que imprime uma saudação usando o nome da pessoa. 
Chame o método cumprimentar() para os objetos pessoa1 e pessoa2 criados no exercício anterior. */

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    cumprimentar() {
        console.log(`Olá, ${this.nome}! Você tem ${this.idade} anos`)
    }
}

var pessoa1 = new Pessoa("rodrigo", 43)
var pessoa2 = new Pessoa("maria", 32)

pessoa1.cumprimentar();
pessoa2.cumprimentar();

/* Exercício 3: Herança
Crie uma classe Aluno que herda da classe Pessoa e adiciona uma propriedade curso. 
Crie um objeto aluno1 dessa classe e imprima suas informações no console. */

/* Exercício 4: Sobrescrita de Método
Na classe Aluno, sobrescreva o método cumprimentar() para incluir uma mensagem específica para alunos. 
Chame o método cumprimentar() para o objeto aluno1. */

class Aluno extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
    cumprimentar() {
        console.log(`Olá, ${this.nome}! Você tem ${this.idade} anos, e você faz parte do curso ${this.curso}`)
    }
}

var aluno1 = new Aluno("Natanael", 18, "Programação")

console.log(aluno1)
aluno1.cumprimentar();

/* 5. Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma 
mensagem com o nome e a idade da pessoa. */

class Pessoa3 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    cumprimentar() {
        console.log(`Olá, ${this.nome}! Você tem ${this.idade} anos`)
    }
}

var pessoa1 = new Pessoa3("rodrigo", 43)
var pessoa2 = new Pessoa3("maria", 32)

pessoa1.cumprimentar();
pessoa2.cumprimentar();

/* 6. Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o 
perímetro do retângulo. */
class Retangulo {
    constructor(Largura, Altura) {
        this.Largura = Largura;
        this.Altura = Altura;
    }
    cumprimentar() {
        console.log("A Largura é:", this.Largura, "A Altura é:", this.Altura)
    }

}
var ass = new Retangulo(36, 18)

/*7-Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e verificar o saldo.*/
class ContaBancaria {
    constructor(saldo, titular) {
        this.saldo = saldo;
        this.titular = titular;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    verificarSaldo() {
        console.log(`O saldo da conta de ${this.titular} é R$${this.saldo}`);
    }
}

var sas = new ContaBancaria(2, "Hulk");


/*8-Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular o valor total do produto (preço * quantidade)*/
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularTotal() {
        return this.preco * this.quantidade;
    }
}

/*9-Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro*/
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    cumprimentar() {
        console.log("O carro é:", this.modelo, "A marca é:", this.marca, "O ano do carro é:", this.ano);
    }
}
var Carrin = new Carro("Toyota", "Corolla", 2015)
Carrin.cumprimentar();

/*10-Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas*/
class ALUNUS {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calcularMedia() {
        let soma = this.notas.reduce((a, b) => a + b, 0);
        return soma / this.notas.length;
    }

    cumprimentar() {
        console.log("Nome:", this.nome, "Matrícula:", this.matricula, "Média:", this.calcularMedia());
    }
}
var aluno = new ALUNUS("Luciano", "77777", [6, 6, 6]);
aluno.cumprimentar();
















