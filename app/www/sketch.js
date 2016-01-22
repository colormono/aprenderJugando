/*
  APREDER JUGANDO
  Learning app for 2/3 kids
  http://github.com/colormono/aprender-jugando
  
  LAYOUTS:
  0- Welcome
  1- Menu
  2- Los números
  3- Las letras
  4- Ingles
  5- Dibujando
  6- Ganaste
  7- Créditos
*/

// Config
var layout = 0;
var timer = 0;

// Assets
var logo, font;
var bgAmarillo, bgAzul, bgRojo, bgVerde;
var imgVolver1, imgVolver2;
var imgMuyBien, imgNumeros, imgGanaste;
// Menu
var menuBtns, btnMenu1, btnMenu2, btnMenu3, btnMenu4;
var imgMenuDibujar, imgMenuIngles, imgMenuLetras, imgMenuNumeros;
// Los Números
var losNumeros, aprenderNumero, eligioNumero;
var imgNumero0, imgNumero1, imgNumero2, imgNumero3, imgNumero4, imgNumero5, imgNumero6, imgNumero7, imgNumero8, imgNumero9, imgNumero10;
var btnNumero0, btnNumero1, btnNumero2, btnNumero3, btnNumero4, btnNumero5, btnNumero6, btnNumero7, btnNumero8, btnNumero9, btnNumero10;

// Preload assets
function preload(){
  
  // Font
  //font = loadFont("Helvetica");
  
  // Images
  logo = loadImage("img/logo.png");
  bgAmarillo = loadImage("img/bg-amarillo.png");
  bgAzul = loadImage("img/bg-azul.png");
  bgRojo = loadImage("img/bg-rojo.png");
  bgVerde = loadImage("img/bg-verde.png");
  imgMenuDibujar = loadImage("img/btn-dibujar.png");
  imgMenuIngles = loadImage("img/btn-ingles.png");
  imgMenuLetras = loadImage("img/btn-letras.png");
  imgMenuNumeros = loadImage("img/btn-numeros.png");
  imgVolver1 = loadImage("img/btn-volver-1.png");
  imgVolver2 = loadImage("img/btn-volver-2.png");
  imgNumero0 = loadImage("img/numero-0.png");
  imgNumero1 = loadImage("img/numero-1.png");
  imgNumero2 = loadImage("img/numero-2.png");
  imgNumero3 = loadImage("img/numero-3.png");
  imgNumero4 = loadImage("img/numero-4.png");
  imgNumero5 = loadImage("img/numero-5.png");
  imgNumero6 = loadImage("img/numero-6.png");
  imgNumero7 = loadImage("img/numero-7.png");
  imgNumero8 = loadImage("img/numero-8.png");
  imgNumero9 = loadImage("img/numero-9.png");
  imgNumero10 = loadImage("img/numero-10.png");
  
  // Sounds
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Estilos
  background(0);
  textFont("Helvetica");
  textSize(22);
  fill(0);
  noStroke();
  
  // Menu
  btnMenu1 = new Button(imgMenuNumeros,width*0.25,height*0.25,2);
  btnMenu2 = new Button(imgMenuLetras,width*0.75,height*0.25,3);
  btnMenu3 = new Button(imgMenuIngles,width*0.25,height*0.75,4);
  btnMenu4 = new Button(imgMenuDibujar,width*0.75,height*0.75,5);
  menuBtns = [btnMenu1, btnMenu2, btnMenu3, btnMenu4];
  
  // Los números
  btnNumero1 = new Button(imgNumero1,random(width),random(height),2);
  btnNumero2 = new Button(imgNumero2,random(width),random(height),2);
  btnNumero3 = new Button(imgNumero3,random(width),random(height),2);
  btnNumero4 = new Button(imgNumero4,random(width),random(height),2);
  btnNumero5 = new Button(imgNumero5,random(width),random(height),2);
  btnNumero6 = new Button(imgNumero6,random(width),random(height),2);
  btnNumero7 = new Button(imgNumero7,random(width),random(height),2);
  btnNumero8 = new Button(imgNumero8,random(width),random(height),2);
  btnNumero9 = new Button(imgNumero9,random(width),random(height),2);
  btnNumero10 = new Button(imgNumero10,random(width),random(height),2);
  losNumeros = [btnNumero1, btnNumero2, btnNumero3, btnNumero4, btnNumero5, btnNumero6, btnNumero7, btnNumero8, btnNumero9, btnNumero10];
}

function draw() {

  // Welcome screen 
  if( layout == 0 ){
    image(bgAzul, 0, 0, width, height);
    image(logo, width/2-(logo.width/2),height/2-(logo.height/2));
  }
  
  // Menu
  else if( layout == 1 ){
    image(bgVerde,0,0, width, height);
    for(var i=0; i<menuBtns.length; i++){
      menuBtns[i].display();
    }
  }
  
  // Los Números
  else if( layout == 2 ){
    image(bgAmarillo, 0, 0, width, height);
    textAlign(CENTER);
    text("Encuentra el número...", 0, 20, width, 50);
  }
  
  // Las Letras
  else if( layout == 3 ){
    image(bgAzul, 0, 0, width, height);
    textAlign(CENTER);
    text("Las letras", 0, 20, width, 50);
  }
  
  // Inglés
  else if( layout == 4 ){
    image(bgRojo, 0, 0, width, height);
    textAlign(CENTER);
    text("Inglés", 0, 20, width, 50);
  }
  
  // Dibujando
  else if( layout == 5 ){
    // Limpiar fondo
    if( millis() < timer ){
      background(255);
    }
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(mouseX, mouseY, 10, 10);
  }
  
  // Ganaste
  else if( layout == 6 ){
    image(bgRojo, 0, 0, width, height);
    image(imgGanaste, 0, 0, width, height);
    image(imgMuyBien, 0, 0, width, height);
  }
  
}

// INTERACCIONES 

function mouseReleased(){

  // Si está en la pantalla welcome
  if( layout == 0 ){
    layout = 1; // Menú principal
  }
  
  // Si está en el menú principal
  else if( layout == 1){
    
    // Revisar en que boton se hizo click
    for( var i=0; i<menuBtns.length; i++){
      var left = menuBtns[i].x;
      var top = menuBtns[i].y;
      var right = menuBtns[i].w;
      var bottom = menuBtns[i].h;
      
      if( mouseX>left && mouseX<right && mouseY>top && mouseY<bottom ){
        layout = menuBtns[i].nextLayout;
        timer = millis() + 100;
      }
    }
    
  }
  
  // Si está en: "Los números"
  else if( layout == 2 ){
    layout = 1;
  }
  
  // Si está en: "Las letras"
  else if( layout == 3 ){
    layout = 1;
  }
  
  // Si está en: "Inglés"
  else if( layout == 4 ){
    layout = 1;
  }
  
  // Si está en: "Dibujando"
  else if( layout == 5 ){
    layout = 1;
  }
  
  // Si está en: "Ganaste"
  else if( layout == 6 ){
    layout = 1;
  }
  
}

// BUTTONS 

function Button(imagen, x, y, nextLayout){
  this.imagen = imagen;
  this.x = x - this.imagen.width/2;
  this.y = y - this.imagen.height/2;
  this.w = this.x + this.imagen.width;
  this.h = this.y + this.imagen.height;
  this.nextLayout = nextLayout;

  this.display = function(){
    image(this.imagen,this.x,this.y);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}