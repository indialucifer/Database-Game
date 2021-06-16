var gameState = 0;
var database;
var playerCount;
var form, player, game;
var allplayers;
var distance = 0;

function setup(){
  createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
  background("white");  
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    game.play();
  }
}

