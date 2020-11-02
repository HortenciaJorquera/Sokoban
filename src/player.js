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

    moveUp(isEmpty){
        if(isEmpty && this.row>0){
            this.row--;
        }
        this.image=loadImage('/assets/images/boxman-up.png')
    }

    moveDown(isEmpty){
        if(isEmpty && this.row<9){
            this.row++;
        }
        this.image=loadImage('/assets/images/boxman-down.png')
    }

    moveRight(isEmpty){
        if(isEmpty && this.col<9){
            this.col++;
        }
        this.image=loadImage('/assets/images/boxman-right.png')
    }

    moveLeft(isEmpty){

        if(isEmpty && this.col>0){
            this.col--;
        }
        this.image=loadImage('/assets/images/boxman-left.png')
    }

}