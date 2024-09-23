const prompt = require('prompt-sync');
const entrada = prompt();

const anoNascimento = 2006;
let anoAtual = 2024;
const nomeCompleto = "Ana Gabrielly de Lima";

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + 2024 + " completo " + 18 + " anos");

anoAtual = anoAtual + 1;

console.log(anoAtual);

const listaDeDestinos = new Array(
  " Buenos Aires",
  " Bangkok",
  " Londres",
  " Paris",
  " Nova York"
);
var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = entrada("Qual a sua idade?");

if(idadeComprador >= 18) {
  console.log ("Olá senhor(a) " + nomeComprador);
  console.log("Comprador maior de idade");
  var contador = 0;
  while(contador <9 ){
    console.log(listaDeDestinos[contador]);
    contador++;
  
  console.log ("Olá senhor(a) " + nomeComprador);
  console.log("Não foi possivel concluir a sua compra");
  console.log("Indisponivel para menor de idade");
}

var contador = 0;
while(contador <9 ){
  console.log(listaDeDestinos[contador]);
  contador++;
}
  var destino = entrada("Digite o numero que corresponde ao destino selecionado (0-8)");
  console.log(`destino selecionado foi:
  ${listaDeDestinos[destino]}`);
}

