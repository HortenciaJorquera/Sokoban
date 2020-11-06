class Game {

    constructor (level) {
        this.level=level;
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
        this.wallImg=loadImage('assets/images/wall.png');
        this.storageLocationImg=loadImage('assets/images/storage-location.png');
        this.grassImg=loadImage('assets/images/grass.png');
        this.floorImg=loadImage('assets/images/floor.png');
    }

    setup(){
        
        //togglePlaying();
        //assign the properties of the gameboard and player
        switch(this.level){
            case 1:
                this.HEIGHT=HEIGHT1;
                this.WIDTH=WIDTH1;
                this.walls=walls1;
                this.storageLocations=storageLocations1;
                this.boxesLocation=boxesLocations1;
                this.grass=grass1;
                this.floor=floor1;
                this.playerPosition=player1;
                break;
            case 2:
                this.HEIGHT=HEIGHT2;
                this.WIDTH=WIDTH2;
                this.walls=walls2;
                this.storageLocations=storageLocations2;
                this.boxesLocation=boxesLocations2;
                this.grass=grass2;
                this.floor=floor2;
                this.playerPosition=player2;
                break;
            case 3:
                this.HEIGHT=HEIGHT3;
                this.WIDTH=WIDTH3;
                this.walls=walls3;
                this.storageLocations=storageLocations3;
                this.boxesLocation=boxesLocations3;
                this.grass=grass3;
                this.floor=floor3;
                this.playerPosition=player3;
                break;
            case 4:
                this.HEIGHT=HEIGHT4;
                this.WIDTH=WIDTH4;
                this.walls=walls4;
                this.storageLocations=storageLocations4;
                this.boxesLocation=boxesLocations4;
                this.grass=grass4;
                this.floor=floor4;
                this.playerPosition=player4;
                break;
        }

        //create and position the player
        this.player=new Player(this.playerPosition[0],this.playerPosition[1])
        this.player.setup();

        //create the boxes
        this.boxes=[];
        for(let box of this.boxesLocation)
            this.boxes.push(new Box(box[0],box[1]));

    }

    drawGame(){
        //draw grid
        for (let x = 0; x <= this.WIDTH; x += SQUARE_SIDE) {
            for (let y = 0; y <= this.HEIGHT; y += SQUARE_SIDE) {
              stroke(200);
              strokeWeight(2);
              line(x, 0, x, this.HEIGHT);
              line(0, y, this.WIDTH, y);
            }
          }
        
        //draw floor
        for(let square of this.floor){
            image(this.floorImg,square[1]*SQUARE_SIDE,square[0]*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
        }

        //draw storeLocations
        for(let storageLocation of this.storageLocations){
            image(this.storageLocationImg,storageLocation[1]*SQUARE_SIDE,storageLocation[0]*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
        }

        //draw walls
        for(let wall of this.walls){
            image(this.wallImg,wall[1]*SQUARE_SIDE,wall[0]*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
        }

        //draw grass
        for(let square of this.grass){
            image(this.grassImg,square[1]*SQUARE_SIDE,square[0]*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
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

    undo(){
        this.player.undo();
        // for(let box of this.boxes){
        //     if(box.old[2]===1){
        //         box.undo();
        //         box.old[2]=0;
        //     }
        // }
    }

    isLevelFinished(){
        
        for(let box of this.boxes){
            if (!box.inStorageLocation) {
                return false
            }
        }
        return true
    }

}