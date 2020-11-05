const game=new Game(3);
let i=1;
let gameOn=false;
let initialMenu=true;
let nextLevelMenu=false;
let lastLevel=false;
let font;
let backgroundMusic;
let stepsSound;
let pushSound;
let winSound;
let onStorageSound;
let playPauseBtn;


function preload(){
    font = loadFont('/assets/fonts/Luckiest_Guy/LuckiestGuy-Regular.ttf');
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

    //backgroundMusic.loop();
    //backgroundMusic.setVolume(0.2);
  
  }


function draw(){

    if(initialMenu){
        clear();
        drawPopUp('Help the Sokoban to put the boxes in a storage location!')
    }
    
    if(gameOn){
        //console.log('hi')
        clear();
        game.drawGame();
    }

    if(nextLevelMenu){
        clear();
        drawPopUp('Congrats, you pass the Level!. Press Enter to go to the next or Esc to exit')
    }
    
    if(lastLevel){
        clear();
        drawPopUp('Congrats! you won the game.Press Enter to start over')
    }
    
}


function keyPressed() {
    if (keyCode === 82) game.restartGame();//r
    if (keyCode === 90) game.undo();//z
    if (keyCode===13) {//enter
        //if(lastLevel) {game.level=1;}
        console.log('enter');
        nextLevelMenu=false;
        lastLevel=false;
        gameOn=true;
        game.restartGame();
    }

    if (keyCode===27) {//escape
        initialMenu=true;
        gameOn=false;
        nextLevelMenu=false;
        lastLevel=false;
    }
    
    //arrows
    if (keyCode === 39) game.player.moveRight(game.nextSquare(game.player.row,game.player.col+1));
    if (keyCode === 37) game.player.moveLeft(game.nextSquare(game.player.row,game.player.col-1));
    if (keyCode === 38) game.player.moveUp(game.nextSquare(game.player.row-1,game.player.col));
    if (keyCode === 40) game.player.moveDown(game.nextSquare(game.player.row+1,game.player.col));
   
    console.log(game.isLevelFinished(),keyCode)
    if(game.isLevelFinished() && keyCode!==13){
        winSound.play();
        
        if(game.level<finalLevel){
            nextLevelMenu=true;
            initialMenu=false;
            lastLevel=false;
            gameOn=false;
            game.level++;
            setup();
            console.log('hi')
            
        }else {
            game.level=1;
            setup();
            lastLevel=true;
            gameOn=false;
            nextLevelMenu=false
            initialMenu=false;
        }
    }

  }

function drawPopUp(message){
    //console.log('hi')
    fill('rgba(134, 0, 179,0.8)');
    stroke('rgba(134, 0, 179,0.8)');
    rect((game.WIDTH-menuWidth)/2, (game.HEIGHT-menuHeight)/2, menuWidth, menuHeight, 20)
    //rect(0, 0, game.HEIGHT, game.WIDTH, 20)
    
    fill('black');
    textFont(font);
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