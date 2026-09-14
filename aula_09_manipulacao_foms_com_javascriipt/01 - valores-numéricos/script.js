// Javascript

// Coletando os elementos
const inputN1 = document.querySelector('input#inputN1')
const inputN2 = document.querySelector('input#inputN2')
const resultado = document.querySelector('div#resultado')

// Funções da calculadora
function somar() {
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const soma = n1 + n2;
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a <u><strong>${soma}</strong></u>.`;
}
function limpar() {
    inputN1.value = "";
    inputN2.value = "";
    resultado.innerHTML = "=";
}