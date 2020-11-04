const game=new Game(1);

function preload(){
    game.preload();
}
  

function setup() {
    game.setup();
    let canvas = createCanvas(game.WIDTH, game.HEIGHT);
    canvas.parent("canvas");
//     button = createButton('click me');
//   button.position(19, 19);
    // const restartBtn=document.getElementById('restart-btn');
    // restartBtn.addEventListener('click',game.restartGame())
  }


function draw(){
    clear()
    game.drawGame();
}

function keyPressed() {
    if (keyCode === 82) game.restartGame();
    if (keyCode === 90) game.undo();

    if (keyCode === 39) game.player.moveRight(game.nextSquare(game.player.row,game.player.col+1));
    if (keyCode === 37) game.player.moveLeft(game.nextSquare(game.player.row,game.player.col-1));
    if (keyCode === 38) game.player.moveUp(game.nextSquare(game.player.row-1,game.player.col));
    if (keyCode === 40) game.player.moveDown(game.nextSquare(game.player.row+1,game.player.col));

    if(game.isLevelFinished()){
        if(game.level<finalLevel){
            //game.congratsLevel()= game.level;
            //setup();
        }else {
        //game.congratsFinal()
        }
    }

  }