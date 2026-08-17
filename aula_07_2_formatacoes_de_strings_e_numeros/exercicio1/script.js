// JAVASCRIPT

// FORMATANDO STRINGS
const nome = window.prompt('Qual é o seu nome?')

// CONTANDO OS CARACTERES
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras. <br>`)

// ALTERNANDO PARA MAIÚSCULAS
document.write(`Seu nome em maiúsuclas é: ${nome.toUpperCase()} <br>`)

// ALTERNANDO PARA MINÚSCULAS
document.write(`Seu nome em minúsculas é: ${nome.toLowerCase()} <br>`)

// FORMATANDO NÚMEROS
const salario = Number(window.prompt('Digite seu salário:'))

// INSERINDO CASAS DECIMAIS
document.write(`Seu salário com casas decimais é: ${salario.toFixed(2)} <br>`)

// ALTERNANDO O IDENTIFICADOR DE CASAS DECIMAIS
document.write(`Seu salário com vírgula nas decimais é: ${salario.toFixed(2). replace('.', ',')} <br>`)

// FORMATAÇÕES DE MOEDA
// REAL
document.write(`Seu salário em real: ${salario.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} <br>`)

// DÓLAR
document.write(`Seu salário em dólar: ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})} <br>`)

// EURO
document.write(`Seu salário em EURO: ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})} <br>`)