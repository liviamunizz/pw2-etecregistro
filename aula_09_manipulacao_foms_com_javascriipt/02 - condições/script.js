// Captura os elementos da tela
const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const divResultado = document.querySelector("#resultado");

// Função para pegar os valores e validar
function obterNumeros() {
    divResultado.classList.remove("erro");

    if (inputNum1.value === "" || inputNum2.value === "") {
        divResultado.classList.add("erro");
        divResultado.innerHTML = "Preencha os dois campos!";
        return null;
    }
    return {
        n1: Number(inputNum1.value),
        n2: Number(inputNum2.value)
    };
}

// Soma
function somar() {
    const numeros = obterNumeros();
    if (!numeros) return;
    const res = numeros.n1 + numeros.n2;
    divResultado.innerHTML = `Resultado: <strong>${res}</strong>`;
}

// Subtração
function subtrair() {
    const numeros = obterNumeros();
    if (!numeros) return;
    const res = numeros.n1 - numeros.n2;
    divResultado.innerHTML = `Resultado: <strong>${res}</strong>`;
}

// Multiplicação
function multiplicar() {
    const numeros = obterNumeros();
    if (!numeros) return;
    const res = numeros.n1 * numeros.n2;
    divResultado.innerHTML = `Resultado: <strong>${res}</strong>`;
}

// Divisão
function dividir() {
    const numeros = obterNumeros();
    if (!numeros) return;

    if (numeros.n2 === 0) {
        divResultado.classList.add("erro");
        divResultado.innerHTML = "Não é possível dividir por zero!";
        return;
    }

    const res = numeros.n1 / numeros.n2;
    divResultado.innerHTML = `Resultado: <strong>${res}</strong>`;
}

// Limpar os campos
function limpar() {
    inputNum1.value = "";
    inputNum2.value = "";
    divResultado.classList.remove("erro");
    divResultado.innerHTML = "Resultado: -";
}