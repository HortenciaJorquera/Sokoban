class Box {

    constructor(row,col){
        this.row=row;
        this.col=col;
        this.image=loadImage('/assets/images/box.png');
    }

    drawBox(){
        image(this.image,this.row*SQUARE_SIDE,this.col*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);

    }

    moveUpBox(){}

}