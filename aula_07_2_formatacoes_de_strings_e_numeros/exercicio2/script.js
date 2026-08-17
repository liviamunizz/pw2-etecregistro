const nome = window.prompt('Qual é o seu nome?')
document.write(`Seu nome em letras maiúsuclas é: ${nome.toUpperCase()} <br>`)

const anonasc = Number(window.prompt('Digite seu ano de nascimento:'))
const idade = 2026 - anonasc;

const cidade = window.prompt('Qual é a sua cidade?')
document.write(`Sua cidade em letras maiúsuclas é: ${cidade.toUpperCase()} <br>`)
document.write(`Olá, <strong>${nome}</strong>! Sua cidade tem ${cidade.length} letras. <br>`)

const salario = Number(window.prompt('Digite seu salário:'))

document.write(`Seu salário em real: ${salario.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} <br>`)
document.write(`Seu salário em dólar: ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})} <br>`)
document.write(`Seu salário em EURO: ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})} <br>`)
