class Game {

    constructor (level) {
        this.level=level;
        // this.walls=[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],
        //             [9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],
        //             [1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],
        //             [1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9]];

        // this.storeLocations=[[3,3],[6,6],[2,3]];
        // this.boxesLocation=[[6,7],[3,6],[5,5]];
        // this.grass=[];
        // this.floor=[];
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
        this.grassImg=loadImage('/assets/images/grass.png');
        this.floorImg=loadImage('/assets/images/floor.png');
    }

    setup(){
        
        switch(this.level){
            case 1:
                this.walls=walls1;
                this.storeLocations=storeLocations1;
                this.boxesLocation=boxesLocations1;
                this.grass=grass1;
                this.floor=floor1;
                this.player=player1;

                break;
            case 2:
                this.walls=walls2;
                this.storeLocations=storeLocations2;
                this.boxesLocation=boxesLocations2;
                this.grass=grass2;
                this.floor=floor2;
                this.player=player2;
                break;
            case 3:
                this.walls=walls3;
                this.storeLocations=storeLocations3;
                this.boxesLocation=boxesLocations3;
                this.grass=grass3;
                this.floor=floor3;
                this.player=player3;
                break;
        }

        //create and position the player
        //this.player=new Player(1,1)
        this.player.setup();

        //create the boxes
        this.boxes=[];
        for(let box of this.boxesLocation){
            this.boxes.push(new Box(box[0],box[1]));

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
        
        //draw floor

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
        this.setup()
    }

    isEmpty(row,col){
        return this.searchForArray(this.walls,[row,col])===-1;
    }

    nextSquare(row,col){
        if(this.searchForArray(this.walls,[row,col])===-1){
            if(this.isABox(row,col)===false)
                return 'empty'
            return this.isABox(row,col)
        }
        return 'wall'
    }

    isABox(row,col){
        for(let box of this.boxes){
            if(box.row===row && box.col===col)  
            return box;
        }
        return false;
    }

    isLevelFinished(){

    }

}