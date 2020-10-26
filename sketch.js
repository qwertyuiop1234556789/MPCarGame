var hypnoticBall, database;
var position;
var form, player, game;
var playerCount = 0;
var gameState = 0;
var allPlayers;


function setup(){
  database = firebase.database();
  createCanvas(500,500);
  
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  
  if (playerCount === 4){
    game.update(1);
  }

  if (gameState === 1){
    clear();
    game.play();
  }
}
