// fundo e tamanho da janela

function setup() {
  createCanvas(600, 600);
  background("black");
}

// funçao de desenhar

function draw() {
  fill("white");
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 5, 5)
  }
 
}
