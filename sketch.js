

//Professora por algum motivo quando eu coloco a velocidade 0 na fada ao inves de quando segurar o botão é andar é quando soltar parar ela apenas teleporta.
//Outra coisa é o fato de eu não ter chamado a função keyPressed pois quando eu chamo a função a estrela continua caindo para o infinito então eu não consegui chamar a função.
//Agora um poblema que veio com o projeto,por algum motivo a voz da fada não estava funcionando é como a voz já vem no projeto o projeto veio não funcionando
//só que eu não sabia disso então eu tive que ver oque estava acontecendo entao eu deletei a voz da fada para não travar o projeto.
//Espero ter falado todos os poblemas não sei se esqueci algum poblema espero que não.


var starImg, bgImg;
var star, starBody;

var fada,fadaImg;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

  //carrega a imagem da estrela é do fundo
  starImg = loadImage("images/star.png");
  bgImg = loadImage("images/starNight.png");

  //carrega a imagem de fada 
  fadaImg = loadImage("images/fairyImage1.png");
}

function setup() {
  createCanvas(800, 750);

  //cria o sprite da fada e adiciona imagem para fada
  fada = createSprite(75,510)
  fada.addImage(fadaImg);
  fada.scale = 0.2;

  //cria o sprite da estrela é coloca imagem para estrela
  star = createSprite(650, 30);
  star.addImage(starImg);
  star.scale = 0.2;

  //cria um mundo que simula a fisica de nosso universo
  engine = Engine.create();
  world = engine.world;


  starBody = Bodies.circle(650, 30, 5, {
    restitution: 0.5,
    isStatic: true
  });
  World.add(world, starBody);

  Engine.run(engine);

}

function draw() {
  background(bgImg);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  //deixa a velocidade da fada 0(que por algum motivo faz a fada teleporta no espaço(1D,2D,3D) é tempo (4D) e isso me deixa triste)
  fada.velocityX = 0;

  //quando encostar na mão da fada a velocidade para
  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
	}

  drawSprites();
}


//função que quando eu chamo por algum motivo faz a estrela não parar é ela continua caindo 
function keyPressed() {
  if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
  }

  //faz a fada teleporta 
  if(keyCode === RIGHT_ARROW){
    fada.velocityX = 20;
  }
  //faz a fada teleporta
  if(keyCode === LEFT_ARROW){
    fada.velocityX = -20;
  }
}
