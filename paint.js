// fundo e tamanho da janela

function setup() {
  createCanvas(600, 600);
  background("white");
}

// funçao de desenhar

function draw() {
  fill("black");
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 5, 5)
  }
 
}
