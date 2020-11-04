const game=new Game(1);
let menu=true;
let font;
let backgroundMusic;
let stepsSound;
let pushSound;
let winSound;
let onStorageSound;
let playPauseBtn;


function preload(){
    //font = loadFont('');
    game.preload();
    backgroundMusic=loadSound('/assets/music and sounds/Background music.mp4');
    stepsSound=loadSound('/assets/music and sounds/oneStep.mp4');
    pushSound=loadSound('/assets/music and sounds/pushBox.mp4');
    winSound=loadSound('/assets/music and sounds/winingLevel.mp4');
    onStorageSound=loadSound('/assets/music and sounds/boxInStorage.mp4');
}
  

function setup() {
    game.setup();
    let canvas = createCanvas(game.WIDTH, game.HEIGHT);
    canvas.parent("canvas");
    //playPauseBtn=createButton('Pause Music')

    // backgroundMusic.loop();
    // backgroundMusic.setVolume(0.4);
  
  }


function draw(){
    //drawMenu();
    
    if(!menu)
    {   clear()
        game.drawGame();
    }else{
        clear()
        drawPopUp('Help the Sokoban to put the boxes in a storage location!')
    }
    
}


function keyPressed() {
    if (keyCode === 82) game.restartGame();
    if (keyCode === 90) game.undo();
    if (keyCode===13) menu=false;
    if (keyCode===27) menu=true;


    if (keyCode === 39) game.player.moveRight(game.nextSquare(game.player.row,game.player.col+1));
    if (keyCode === 37) game.player.moveLeft(game.nextSquare(game.player.row,game.player.col-1));
    if (keyCode === 38) game.player.moveUp(game.nextSquare(game.player.row-1,game.player.col));
    if (keyCode === 40) game.player.moveDown(game.nextSquare(game.player.row+1,game.player.col));

    if(game.isLevelFinished()){
        if(game.level<finalLevel){
            game.level++;
            //frameRate(0)
            drawPopUp('Congrats! you passed to level '+ game.level)
            //frameRate(5)
            setup();
        }else {
            drawPopUp('Congrats! you won the game')
            game.level=1;
        }
    }

  }

function drawPopUp(message){
    
    fill('rgba(134, 0, 179,0.8)');
    stroke('rgba(134, 0, 179,0.8)');
    rect((game.WIDTH-menuWidth)/2, (game.HEIGHT-menuHeight)/2, menuWidth, menuHeight, 20)
    //Text('Welcome',(game.WIDTH-menuWidth)/2, (game.HEIGHT-menuHeight)/2)
    fill('black');
    textSize(50);

    textAlign(CENTER,CENTER)
    
    text(message,(game.WIDTH-menuWidth)/2, (game.HEIGHT-menuHeight)/2,menuWidth, menuHeight, 20);

}

function togglePlaying(){
    if(!backgroundMusic.isPlaying()){
        backgroundMusic.play();
        backgroundMusic.setVolume(0.3);
        //playPauseBtn.html('Pause Music')
    }else{
        backgroundMusic.pause();
        //playPauseBtn.html('Play Music')
    }
}