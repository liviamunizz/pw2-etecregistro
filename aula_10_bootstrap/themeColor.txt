//  Script para alternar o tema

const themeSwitch = document.getElementById("themeSwitch");
const htmlElement = document.documentElement; // Pega a tag <html>

themeSwitch.addEventListener("change", function () {
  if (this.checked) {
    htmlElement.setAttribute("data-bs-theme", "dark");
    this.nextElementSibling.textContent = "Modo Escuro";
  } else {
    htmlElement.setAttribute("data-bs-theme", "light");
    this.nextElementSibling.textContent = "Modo Claro";
  }
});
