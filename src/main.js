const game=new Game();

function preload(){
    game.preload();
}
  

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
    game.setup();
  }


function draw(){
    clear()
    game.drawGame();
}

function keyPressed() {
    if (keyCode === 82) game.restartGame();
    if (keyCode === 39) game.player.moveRight(game.isEmpty(game.player.row,game.player.col+1));
    if (keyCode === 37) game.player.moveLeft(game.isEmpty(game.player.row,game.player.col-1));
    if (keyCode === 38) game.player.moveUp(game.isEmpty(game.player.row-1,game.player.col));
    if (keyCode === 40) game.player.moveDown(game.isEmpty(game.player.row+1,game.player.col));
  }