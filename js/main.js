import { Pilota } from "./pilota.js";

// Preparació del canvas ----------------------
/* Obté una referència a <canvas>, després crida al mètode getContext()
  per definir un context al el que es pot començar a dibuisar
  (ctx) és un objecte que representa l'àrea de dibuix del 
  <canvas> y permet dibuixar elements 2D al damunt.

  width and height són dreceres a l'ample i alt del canvas  que coincideixen
  amb l'alt i ample del navegador (viewport)
*/
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// funció per generar un número aleatori entre dues xifres

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// funció per generar un color aleatori
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

let Pilota1 = new Pilota(50, 100, 4, 4, "blue", 10);
Pilota1.dibuixa(ctx);

let pilotes = [];

function loop() {
  //pintar canvas
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  //crear 25 pilotes aleatories
  while (pilotes.length < 25) {
    //assignar mida random
    let size = random(10, 20);  
    //posició aleatòria x entre (0 + mida) i (with – mida)
    let posicioX = random(0+size, width-size);
    //posició aleatòria y entre (0 + mida) i (height – mida)
    let posicioY = random(0+size, width-size);
    let color = randomRGB();
    let veloX = random(-7,7);
    let veloY = random(-7,7);

    //crear pilota
    let ball = new Pilota(posicioX, posicioY, veloX, veloY, color, size);

    //afegir pilotes
    pilotes.push(ball);
  }
  //recorrer array pelotas
  for (let i=0; i<pilotes.length;  i++) {
    pilotes[i].dibuixa(ctx);
    pilotes[i].mou(width, height);
    colisiona(pilotes[i]);
  }
  //cridar 
  requestAnimationFrame(loop);
}
//se añade al final para que funcione
loop();

function colisiona(p) {
  //comprobar para cada pelota
  for (let i=0; i<pilotes.length;  i++) {
    if (!(p === pilotes[i])) {
      let dx = p.x - pilotes[i].x;
      let dy = p.y - pilotes[i].y;
      //teorema pitagoras
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < p.mida + pilotes[i].mida) {
        pilotes[i].color = randomRGB();
        p.color = randomRGB();
      }
    }
  }
}