const visor = document.getElementById("visor")
const headerSubtitle = document.getElementById("headerSubtitle")

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

function atualizarSubtitulo() {
  if (!headerSubtitle) {
    return
  }

  const agora = new Date()
  const horario = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })

  headerSubtitle.textContent = `Pronta para somar, subtrair, multiplicar e dividir. Agora são ${horario}.`
}

atualizarSubtitulo()
setInterval(atualizarSubtitulo, 60000)

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
