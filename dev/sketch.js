/*
  APREDER JUGANDO
  Learning app for 2/3 kids
  http://github.com/colormono/aprenderjugando
  
  STATES:
  0 = Welcome
  1 = Menu
  2 = Los números
  3 = Las letras
  4 = Ingles
  5 = Dibujando
  6 = Ganaste
  7 = Créditos
*/

// Config
var state = 0;
var timer = 0;
var score = 0;

// Assets
var logo, font;
var bgAmarillo, bgAzul, bgRojo, bgVerde;
var imgVolver1, imgVolver2;
var imgMuyBien, imgGanaste, imgNumeros;

// Sensors
var threshold = 30;
var accChangeX = 0; 
var accChangeY = 0;
var accChangeT = 0;

// Menu
var btnMenu1, btnMenu2, btnMenu3, btnMenu4;
var imgMenuDibujar, imgMenuIngles, imgMenuLetras, imgMenuNumeros;

// Los Números
var numsUrna = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var miUrna = [];

var losNumeros, losNumerosSonidos, aprenderNumero;
var imgNumero0, imgNumero1, imgNumero2, imgNumero3, imgNumero4, imgNumero5, imgNumero6, imgNumero7, imgNumero8, imgNumero9, imgNumero10;
var btnNumero0, btnNumero1, btnNumero2, btnNumero3, btnNumero4, btnNumero5, btnNumero6, btnNumero7, btnNumero8, btnNumero9, btnNumero10;
var btnSonidoNumero0, btnSonidoNumero1, btnSonidoNumero2, btnSonidoNumero3, btnSonidoNumero4, btnSonidoNumero5, btnSonidoNumero6, btnSonidoNumero7, btnSonidoNumero8, btnSonidoNumero9, btnSonidoNumero10;

// PRELOAD
// --------------------------------------------

function preload(){
  
  // Font
  //font = loadFont("Helvetica");
  
  // Images
  logo = loadImage("images/logo.png");
  bgAmarillo = loadImage("images/bg-amarillo.png");
  bgAzul = loadImage("images/bg-azul.png");
  bgRojo = loadImage("images/bg-rojo.png");
  bgVerde = loadImage("images/bg-verde.png");
  imgMenuDibujar = loadImage("images/btn-dibujar.png");
  imgMenuIngles = loadImage("images/btn-ingles.png");
  imgMenuLetras = loadImage("images/btn-letras.png");
  imgMenuNumeros = loadImage("images/btn-numeros.png");
  imgVolver1 = loadImage("images/btn-volver-1.png");
  imgVolver2 = loadImage("images/btn-volver-2.png");
  imgMuyBien = loadImage("images/img-muybien.png");
  imgGanaste = loadImage("images/img-ganaste.png");
  imgNumero0 = loadImage("images/numero-0.png");
  imgNumero1 = loadImage("images/numero-1.png");
  imgNumero2 = loadImage("images/numero-2.png");
  imgNumero3 = loadImage("images/numero-3.png");
  imgNumero4 = loadImage("images/numero-4.png");
  imgNumero5 = loadImage("images/numero-5.png");
  imgNumero6 = loadImage("images/numero-6.png");
  imgNumero7 = loadImage("images/numero-7.png");
  imgNumero8 = loadImage("images/numero-8.png");
  imgNumero9 = loadImage("images/numero-9.png");
  imgNumero10 = loadImage("images/numero-10.png");
  
  // Sounds
  btnSonidoNumero0 = loadSound("sounds/numero0.wav")
  btnSonidoNumero1 = loadSound("sounds/numero1.wav")
  btnSonidoNumero2 = loadSound("sounds/numero2.wav")
  btnSonidoNumero3 = loadSound("sounds/numero3.wav")
  btnSonidoNumero4 = loadSound("sounds/numero4.wav")
  btnSonidoNumero5 = loadSound("sounds/numero5.wav")
  btnSonidoNumero6 = loadSound("sounds/numero6.wav")
  btnSonidoNumero7 = loadSound("sounds/numero7.wav")
  btnSonidoNumero8 = loadSound("sounds/numero8.wav")
  btnSonidoNumero9 = loadSound("sounds/numero9.wav")
  btnSonidoNumero10 = loadSound("sounds/numero10.wav")
}


// SETUP
// --------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Estilos
  textFont("Helvetica");
  textSize(22);
  noStroke();
}

// DRAW
// --------------------------------------------

function draw() {
  background(0);

  // Select stage to draw
  if (state == 0) {
    drawWelcome();
  }
  else if( state == 1 ){
    drawMenu();
  }
  else if( state == 2 ){
    drawLosNumeros();
  }
  else if( state == 3 ){
    drawLasLetras();
  }
  else if( state == 4 ){
    drawIngles();
  }
  else if( state == 5 ){
    drawDibujando();
  }
  else if( state == 6 ){
    drawGanaste();
  }
  
}

// STATES
// --------------------------------------------

// Welcome screen
function drawWelcome(){
  image(bgAzul, 0, 0, width, height);
  push();
  imageMode(CENTER);
  translate(width/2, height/2);
  image(logo, 0, 0, autoW(height*0.65, logo.width, logo.height), height*0.65 );
  pop();
}

// Main Menu
function drawMenu(){
  image(bgVerde,0,0, width, height);
  btnMenu1.display();
  btnMenu2.display();
  btnMenu3.display();
  btnMenu4.display();
}

// Los Números
function drawLosNumeros(){
  image(bgAmarillo, 0, 0, width, height);
  fill(0);
  text("Encuentra el número...", 0, 20);
  text(aprenderNumero, 250, 20);
  drawScore();
  
  for(var i=0; i<losNumeros.length; i++){
    losNumeros[i].display();  
  }
  
  checkForShake();
}

// Las Letras
function drawLasLetras(){
  image(bgAzul, 0, 0, width, height);
  fill(0);
  text("Las letras", 0, 20, width, 50);
}

// Inglés
function drawIngles(){
  image(bgRojo, 0, 0, width, height);
  fill(0);
  text("Inglés", 0, 20, width, 50);
}

// Dibujando
function drawDibujando(){
  // Limpiar fondo
  if( millis() < timer ){
    background(255);
  }
  fill(random(0,255),random(0,255),random(0,255));
  ellipse(mouseX, mouseY, 10, 10);
}

// Score
function drawScore(){
  fill(0);
  text("Puntos: "+ score, 0, 50);
}

// Ganaste
function drawGanaste(){
  image(bgRojo, 0, 0, width, height);
  image(imgGanaste, 0, height-imgGanaste.height);
  image(imgMuyBien, width/2-imgMuyBien.width/2, height*0.3);
}


// INTERACCIONES 
// --------------------------------------------

function mouseReleased(){

  // Si está en la pantalla welcome
  if( state == 0 ){
    createMainMenu();
  }
  
  // Si está en el menú principal
  else if( state == 1){
    
    // Revisar en que boton se hizo click
    if( btnMenu1.test() == true ){
      startLosNumeros();
      state = 2;
    }
    
  }
  
  // Si está en: "Los números"
  else if( state == 2 ){

    // Revisar numeros
    for(var i=0; i<losNumeros.length; i++){
      if( losNumeros[i].test() == true ){
        if( aprenderNumero == losNumeros[i].value ){
          losNumeros[i].acertar();
          losNumerosSonidos[i].play();
          print("Bien, ese es el "+ losNumeros[i].value );
          
          if( score < 10 ){
            jugarLosNumeros();
          } else {
            state = 6;
          }
        } else {
          losNumerosSonidos[i].play();
          print("No, ese es el "+ losNumeros[i].value );
        }
      } 
    }
    
  }
  
  // Si está en: "Las letras"
  else if( state == 3 ){
    state = 1;
  }
  
  // Si está en: "Inglés"
  else if( state == 4 ){
    state = 1;
  }
  
  // Si está en: "Dibujando"
  else if( state == 5 ){
    state = 1;
  }
  
  // Si está en: "Ganaste"
  else if( state == 6 ){
    state = 1;
  }
  
}

// Main menu
function createMainMenu(){
  btnMenu1 = new Button(imgMenuNumeros,width*0.25,height*0.25);
  btnMenu2 = new Button(imgMenuLetras,width*0.75,height*0.25);
  btnMenu3 = new Button(imgMenuIngles,width*0.25,height*0.75);
  btnMenu4 = new Button(imgMenuDibujar,width*0.75,height*0.75);

  state = 1;
}

// Los números
function startLosNumeros(){
  
  // Limpiar valores iniciales
  score = 0;

  miUrna = [];
  urnaTemp = [];
  for (var i=0; i < numsUrna.length; i++) {
    miUrna[i] = get_rand(numsUrna);
  }
  
  jugarLosNumeros();
}

function jugarLosNumeros(){
  
  // Aprender número
  aprenderNumero = round(random(0, 10));
  
  // Crear botones
  btnNumero0 = new ButtonNumber( imgNumero0, getRandomXPosition(), getRandomYPosition(), 0 );
  btnNumero1 = new ButtonNumber( imgNumero1, getRandomXPosition(), getRandomYPosition(), 1 );
  btnNumero2 = new ButtonNumber( imgNumero2, getRandomXPosition(), getRandomYPosition(), 2 );
  btnNumero3 = new ButtonNumber( imgNumero3, getRandomXPosition(), getRandomYPosition(), 3 );
  btnNumero4 = new ButtonNumber( imgNumero4, getRandomXPosition(), getRandomYPosition(), 4 );
  btnNumero5 = new ButtonNumber( imgNumero5, getRandomXPosition(), getRandomYPosition(), 5 );
  btnNumero6 = new ButtonNumber( imgNumero6, getRandomXPosition(), getRandomYPosition(), 6 );
  btnNumero7 = new ButtonNumber( imgNumero7, getRandomXPosition(), getRandomYPosition(), 7 );
  btnNumero8 = new ButtonNumber( imgNumero8, getRandomXPosition(), getRandomYPosition(), 8 );
  btnNumero9 = new ButtonNumber( imgNumero9, getRandomXPosition(), getRandomYPosition(), 9 );
  btnNumero10 = new ButtonNumber( imgNumero10, getRandomXPosition(), getRandomYPosition(), 10 );
  
  losNumeros = [btnNumero0, btnNumero1, btnNumero2, btnNumero3, btnNumero4, btnNumero5, btnNumero6, btnNumero7, btnNumero8, btnNumero9, btnNumero10];
  losNumerosSonidos = [btnSonidoNumero0, btnSonidoNumero1, btnSonidoNumero2, btnSonidoNumero3, btnSonidoNumero4, btnSonidoNumero5, btnSonidoNumero6, btnSonidoNumero7, btnSonidoNumero8, btnSonidoNumero9, btnSonidoNumero10];

}


// BUTTONS 
// --------------------------------------------

function Button(imagen, x, y){
  this.imagen = imagen;
  this.x = x - this.imagen.width/2;
  this.y = y - this.imagen.height/2;
  this.w = this.imagen.width;
  this.h = this.imagen.height;

  this.display = function(){
    image(this.imagen,this.x,this.y);
  }
  
  this.test = function(){
    return ( mouseX>this.x && mouseX<this.x+this.w && mouseY>this.y && mouseY<this.y+this.h );
  }
}

function ButtonNumber(imagen, x, y, value) {
  Button.call(this, imagen, x, y);

  this.value = value;

  this.acertar = function() {
    score ++;
  };
}


// MATH
// --------------------------------------------
function autoW( newHeight, originalWidth, originalHeight ){
  return( newHeight * originalWidth / originalHeight );
}

function autoH( newWidth, originalWidth, originalHeight ){
  return( newWidth * originalHeight / originalWidth );
}

function getRandomXPosition(){
  var marginRight = height*0.1;
  var marginLeft = height*0.1;
  return( random(marginLeft, width-marginRight) );
}

function getRandomYPosition(){
  var marginTop = height*0.1;
  var marginDown = height*0.1;
  return( random(marginTop, height-marginDown) );
}

// URNA
var urnaTemp = [];

function in_array(array, el) {
  for (var i = 0; i < array.length; i++){
    if (array[i] == el) return true;
  }
  return false;
}

function get_rand(array) {
  var rand = array[Math.floor(Math.random() * array.length)];
  
  if (!in_array(urnaTemp, rand)) {
    urnaTemp.push(rand);
    return rand;
  }
  return get_rand(array);
}

// RESPONSIVE
// --------------------------------------------

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// SENSORS
// --------------------------------------------

function checkForShake() {
  // Calculate total change in accelerationX and accelerationY
  accChangeX = abs(accelerationX - pAccelerationX);
  accChangeY = abs(accelerationY - pAccelerationY);
  accChangeT = accChangeX + accChangeY;
  // If shake
  if (accChangeT >= threshold) {
    // reordenar numeros
    for(var i=0; i<losNumeros.length; i++){
      losNumeros[i].x = getRandomXPosition();
      losNumeros[i].y = getRandomYPosition();
    }
  } 
  // If not shake
  else {
  }
}