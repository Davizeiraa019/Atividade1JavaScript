const meuNome = 'Davi';
const minhaIdade = 27;
const minhaCidade = 'Campinas';
console.log ("Olá, meu nome é Davi, tenho 27 anos e moro em Campinas.");
// Cartão de visitas


// const anoDeNascimento = 1999;
// anoDeNascimento = 2000;
// console.log(anoDeNascimento);
// Atribuição a uma variável constante.
let idadeAtual = 26;
idadeAtual = 25;
console.log(idadeAtual);

const jantar = 700;
const taxaDeServico = 0.1;
console.log('O valor do jantar é', 700, 'reais.')

const valorDaGorgeta = jantar*taxaDeServico;
console.log('Valor da Gorgeta é', valorDaGorgeta, 'reais')

const valorTotalJantar = jantar + valorDaGorgeta;
console.log('Valor do jantar somado a taxa de serviço é', valorTotalJantar, 'reais.')

const valorDividido = valorTotalJantar / 3;
console.log ('Valor dividido para 3 amigos será', valorDividido, 'reais.')

let usuarioLogado = false;
console.log('Status inicial:', usuarioLogado)
let logado = true;
console.log('Status inicial', logado)

let estoqueCamisetas = 50;
let venda1 = 15;
let venda2 = 12 
console.log('Esse é o novo estoque após a primeira venda', estoqueCamisetas - venda1)
console.log('Esse é o novo estoque após a primeira e segunda venda', estoqueCamisetas - venda1 - venda2)

// 6. Juntando Pedaços (Concatenação de Strings com +)
// Objetivo: Unir múltiplas strings usando o operador de adição.
// Crie três variáveis separadas: primeiroNome, nomeDoMeio e sobrenome.
// Crie uma quarta variável chamada nomeCompleto que una as três variáveis anteriores usando o operador +. Lembre-se de adicionar espaços em branco (" ") entre as palavras para que o nome não fique grudado.
// Exiba o resultado final no console.
const primeiroNome = 'Davi';
const nomeDoMeio = 'Araujo';
const sobrenome = 'Oliveira';
const nomeCompleto = primeiroNome+' '+ nomeDoMeio + ' '+ sobrenome
console.log(nomeCompleto)

// 7. Calculadora de Área (Multiplicação)
// Objetivo: Usar a matemática para resolver problemas espaciais.
// Crie uma const para a largura de um terreno e outra const para o comprimento.
// Calcule a área total multiplicando as duas variáveis.
// Imprima uma mensagem clara informando a área do terreno.

const larguraTerreno = 50;
const comprimentoTerreno = 50;
const areaDoTerreno = larguraTerreno * comprimentoTerreno;
console.log('A área do terreno é', areaDoTerreno, 'metros.')

// 8. A Loja Online (Desafio Final: Tudo Junto)
// Objetivo: Unir todos os conceitos da aula em um único exercício.
// Crie uma const contendo o nome de um produto (String).
// Crie um let para o preço do produto.
// Crie uma const que indique se o produto tem frete grátis ou não (Boolean).
// Simule uma promoção: crie uma variável para um valor de desconto e subtraia esse valor do preço original do produto.
// Faça um console.log completo exibindo: o nome do produto, o preço com desconto e o status do frete grátis.

const produto = 'Celular'
let celular = 3000;
const freteGratis = true
let cupomDesconto = 0.3;
let desconto = celular * cupomDesconto;
let precoFinal = celular - desconto;
console.log('O', produto, 'custa', celular, 'reais.')
console.log('O desconto do', produto, 'é', celular * cupomDesconto, 'reais.')
console.log('Com o cupom aplicado a compra, o celular irá custar', precoFinal, 'reais.')
