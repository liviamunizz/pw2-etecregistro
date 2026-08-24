// Javascript

// Capturando um elemento do DOM
const titulo = window.document.getElementsByTagName('h1')[0]

titulo.innerText = "Fui alterado pelo Javascript=("
titulo.style.color = 'yellow'

// Alterando a cor da página pelo JS
const pagina = window.document.body
pagina.style.backgroundColor = '#2f2f2f'

// Capturando a div
const caixaMagica = window.document.getElementById('caixaMagica');

function entrada() {
    caixaMagica.innerText = 'Oi! :)'
    caixaMagica.style.backgroundColor = 'blue'
}
function saida() {
    caixaMagica.innerText = 'Tchau! :)'
    caixaMagica.style.backgroundColor = 'black'
}
function clicar() {
    caixaMagica.innerText = 'Clicou!'
    caixaMagica.style.backgroundColor = 'red'
}
// Escutando um evento
caixaMagica.addEventListener('mouseenter', entrada)
caixaMagica.addEventListener('mouseout', saida)
caixaMagica.addEventListener('click', clicar)