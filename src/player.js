class Player {

    constructor(row,col){
        this.row=row;
        this.col=col;
        this.old=[row,col];
    }

    setup(){
        this.image=loadImage('/assets/images/boxman-down.png');
    }

    drawPlayer(){
        image(this.image,this.col*SQUARE_SIDE,this.row*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
    }

    moveUp(nextSquare){
        this.image=loadImage('/assets/images/boxman-up.png');
        this.old[1]=this.col;

        if(nextSquare==='empty'){
            this.old[0]=this.row;
            this.row--;
            return
        }
        if(typeof nextSquare==='object' && game.nextSquare(nextSquare.row-1,nextSquare.col)!=='wall' && typeof game.nextSquare(nextSquare.row-1,nextSquare.col)!=='object'){
            this.old[0]=this.row;
            this.row--;
            nextSquare.moveBoxUp(game.isEmpty(nextSquare.row-1,nextSquare.col));
            this.image=loadImage('/assets/images/boxman-pushing-up.png');
            return
        }
    }

    moveDown(nextSquare){
        this.image=loadImage('/assets/images/boxman-down.png');
        this.old[0]=this.row;

        if(nextSquare==='empty'){
            this.old[1]=this.col;
            this.row++;
            return
        }
        if(typeof nextSquare==='object' && game.nextSquare(nextSquare.row+1,nextSquare.col)!=='wall'&& typeof game.nextSquare(nextSquare.row+1,nextSquare.col)!=='object'){
            this.old[0]=this.row;
            this.row++;
            nextSquare.moveBoxDown(game.isEmpty(nextSquare.row+1,nextSquare.col));
            this.image=loadImage('/assets/images/boxman-pushing-down1.png');
            return
        }
    }

    moveRight(nextSquare){
        this.image=loadImage('/assets/images/boxman-right.png');
        this.old[0]=this.row;

        if(nextSquare==='empty'){
            this.old[1]=this.col;
            this.col++;
            return
        }
        if(typeof nextSquare==='object' && game.nextSquare(nextSquare.row,nextSquare.col+1)!=='wall'&& typeof game.nextSquare(nextSquare.row,nextSquare.col+1)!=='object'){
            this.old[1]=this.col;
            this.col++;
            nextSquare.moveBoxRight(game.isEmpty(nextSquare.row,nextSquare.col+1));
            this.image=loadImage('/assets/images/boxman-pushing-right.png');
            return
        }
    }

    moveLeft(nextSquare){

        this.image=loadImage('/assets/images/boxman-left.png');
        this.old[0]=this.row;
        if(nextSquare==='empty'){
            this.old[1]=this.col;
            this.col--;
            return
        }
        if(typeof nextSquare==='object' && game.nextSquare(nextSquare.row,nextSquare.col-1)!=='wall' && typeof game.nextSquare(nextSquare.row,nextSquare.col-1)!=='object'){
            this.old[1]=this.col;
            this.col--;
            nextSquare.moveBoxLeft(game.isEmpty(nextSquare.row,nextSquare.col-1));
            this.image=loadImage('/assets/images/boxman-pushing-left.png');
            return
        }
    }

    undo(){
        this.row=this.old[0];
        this.col=this.old[1];
        
    }
}