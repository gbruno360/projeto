window.onload = function ligaLightMode() {
  //Variável switcherButton recebe a div id = "switch"
  const switcherButton = document.getElementById("switch")
  const img = document.querySelector("#profile img")

  //Botão Switcher escuta evento de click e com base nele gatilha uma função
  switcherButton.addEventListener("click", function () {
    //A função altera o nome da classe do elemento "meuHtml" para "light":
    document.getElementById("meuHtml").classList.toggle("light")
    if (document.getElementById("meuHtml").classList.contains("light")) {
      //Se tiver lightMode, mudar imagem
      img.setAttribute("src", "./assets/avatar-light.png")
      img.setAttribute(
        "alt",
        "Foto de Mayk Brito, com óculos escuros, sem barba, de casaco preto, e com fundo em degradê horizontal nas cores roxo e azul."
      )
    } else {
      img.setAttribute("src", "./assets/avatar.png")
      img.setAttribute(
        "alt",
        "Foto de Mayk Brito, com óculos, sem barba, de casaco preto, e com fundo em degradê horizontal nas cores roxo e azul."
      )
    }
  })
}
