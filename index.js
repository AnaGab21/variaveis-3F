let idade = 17;
const anoNascimento = 2006;
let anoAtual = 2024;
const nomeCompleto = "Ana Gabrielly de Lima";

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + 2024 + " completo " + 17 + " anos");

anoAtual = anoAtual + 1;

console.log(anoAtual);

idade = idade + 1;
console.log(idade);

const listaDeDestinos = new Array(
  " Buenos Aires",
  " Bangkok",
  " Londres",
  " Paris",
  " Nova York"
);

const idadeComprador = 18;

if(idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  console.log("destinos disponiveis: " + listaDeDestinos);
} else {
  console.log("Não foi possivel concluir a sua compra");
  console.log("Indisponivel para menor de idade");
}