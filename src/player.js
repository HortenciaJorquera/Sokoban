class Player {

    constructor(row,col){
        this.row=row;
        this.col=col;
    }

    setup(){
        this.image=loadImage('/assets/images/boxman-down.png');
    }

    drawPlayer(){
        image(this.image,this.col*SQUARE_SIDE,this.row*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
    }

    moveUp(nextSquare){
        this.image=loadImage('/assets/images/boxman-up.png');
        if(nextSquare==='empty'){
            this.row--;
            return
        }
        if(typeof nextSquare==='object' && game.nextSquare(nextSquare.row-1,nextSquare.col)!=='wall' && typeof game.nextSquare(nextSquare.row-1,nextSquare.col)!=='object'){
            this.row--;
            nextSquare.moveBoxUp(game.isEmpty(nextSquare.row-1,nextSquare.col));
            this.image=loadImage('/assets/images/boxman-pushing-up.png');
            return
        }
    }

    moveDown(nextSquare){
        this.image=loadImage('/assets/images/boxman-down.png');
        if(nextSquare==='empty'){
            this.row++;
            return
        }
        if(typeof nextSquare==='object' && game.nextSquare(nextSquare.row+1,nextSquare.col)!=='wall'&& typeof game.nextSquare(nextSquare.row+1,nextSquare.col)!=='object'){
            this.row++;
            nextSquare.moveBoxDown(game.isEmpty(nextSquare.row+1,nextSquare.col));
            this.image=loadImage('/assets/images/boxman-pushing-down1.png');
            return
        }
    }

    moveRight(nextSquare){
        this.image=loadImage('/assets/images/boxman-right.png');

        if(nextSquare==='empty'){
            this.col++;
            return
        }
        if(typeof nextSquare==='object' && game.nextSquare(nextSquare.row,nextSquare.col+1)!=='wall'&& typeof game.nextSquare(nextSquare.row,nextSquare.col+1)!=='object'){
            this.col++;
            nextSquare.moveBoxRight(game.isEmpty(nextSquare.row,nextSquare.col+1));
            this.image=loadImage('/assets/images/boxman-pushing-right.png');
            return
        }
    }

    moveLeft(nextSquare){

        this.image=loadImage('/assets/images/boxman-left.png');
        if(nextSquare==='empty'){
            this.col--;
            return
        }
        if(typeof nextSquare==='object' && game.nextSquare(nextSquare.row,nextSquare.col-1)!=='wall' && typeof game.nextSquare(nextSquare.row,nextSquare.col-1)!=='object'){
            this.col--;
            nextSquare.moveBoxLeft(game.isEmpty(nextSquare.row,nextSquare.col-1));
            this.image=loadImage('/assets/images/boxman-pushing-left.png');
            return
        }
    }


}