let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;

let velocidadexBolinha = 6
let velocidadeyBolinha = 6

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha,yBolinha,diametro) ;
  xBolinha += velocidadexBolinha
  yBolinha += velocidadexBolinha
}
