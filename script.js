const visor = document.getElementById("visor")

function adicionar(valor) {
  visor.value += valor
}

function limpar() {
  visor.value = ""
}

function apagar() {
  visor.value = visor.value.slice(0, -1)
}

function calcular() {
  try {
    visor.value = eval(visor.value)
  } catch (e) {
    visor.value = "Erro"
  }
}

const colorPicker = document.getElementById("colorPicker")

colorPicker.addEventListener("input", function () {
  document.querySelector(".calculadora").style.background = this.value
})

document.addEventListener("keydown", function (event) {
  const tecla = event.key

  // Se for número
  if (!isNaN(tecla)) {
    adicionar(tecla)
  }

  // Operações
  if (["+", "-", "*", "/"].includes(tecla)) {
    adicionar(tecla)
  }

  // Ponto
  if (tecla === ".") {
    adicionar(".")
  }

  // Enter = calcular
  if (tecla === "Enter") {
    calcular()
  }

  // Backspace = apagar
  if (tecla === "Backspace") {
    apagar()
  }

  // Escape = limpar
  if (tecla === "Escape") {
    limpar()
  }
})
