class Game {

    constructor () {
        this.walls=[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],
                    [9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],
                    [1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],
                    [1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9]];

        this.storeLocations=[[3,3],[6,6]];
        this.boxesLocation=[[6,7],[8,8]];
    }

    searchForArray(haystack, needle){
        var i, j, current;
        for(i = 0; i < haystack.length; ++i){
          if(needle.length === haystack[i].length){
            current = haystack[i];
            for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
            if(j === needle.length)
              return i;
          }
        }
        return -1;
      }

    preload(){
        this.wallImg=loadImage('/assets/images/wall.png');
        this.storeLocationImg=loadImage('/assets/images/store-location.png');
        
    }

    setup(){
        this.player=new Player(1,1)
        this.player.setup();

        //setup of boxes
        this.boxes=[];
        for(let box of this.boxesLocation){
            this.boxes.push(new Box(box[0],box[1]));
        }
        

    }

    drawGame(){
        //draw grid
        for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
            for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
              stroke(0);
              strokeWeight(2);
              line(x, 0, x, HEIGHT);
              line(0, y, WIDTH, y);
            }
          }
        
        //draw storeLocations
        for(let storeLocation of this.storeLocations){
            image(this.storeLocationImg,storeLocation[1]*SQUARE_SIDE,storeLocation[0]*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
        }

        //draw walls
        for(let wall of this.walls){
            image(this.wallImg,wall[1]*SQUARE_SIDE,wall[0]*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
        }

        //draw player
        this.player.drawPlayer();

        //draw boxes
        for(let box of this.boxes){
            box.drawBox();
        }

        
    }

    restartGame(){
        this.player=new Player(1,1)
        this.player.setup();

    }

    isEmpty(row,col){
        return game.searchForArray(this.walls,[row,col])===-1;
    }

    updateBox(box,row,col){}

    isLevelFinished(){}

}