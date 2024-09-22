// ESSE CÓDIGO É DO PROJETO PASSADO, AINDA IREI ALTERA-LO

// Mude esses valores para alterar o tamanho do tabuleiro
const boardSizeX = 8;
const boardSizeY = 8;

const boardP1 = document.getElementById("boardP1");

function makeGrid() {
  for (let i = 1; i <= boardSizeY; i++) {
    let y = i;
    for (let j = 1; j <= boardSizeX; j++) {
      let x = j;
      let boxElement = document.createElement("div");

      // Adiciona uma classe comum para as casas do jogo
      boxElement.classList.add("box");

      // Adiciona um id baseado na coordenada x e y
      boxElement.id = "P1_" + x + "_" + y;

      // Ajusta a largura da div baseado no tamanho do tabuleiro e a quantidade de colunas
      boxElement.style.width =
        (boardP1.offsetWidth / boardSizeX).toFixed(1) + "px";
      boxElement.style.height =
        (boardP1.offsetWidth / boardSizeX).toFixed(1) + "px";

      // Adiciona bordas (talzes seja descartado futuramente)
      boxElement.style.border = ".0625rem solid black";

      boardP1.appendChild(boxElement);
    }
  }
}
makeGrid();