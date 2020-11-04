class Box {

    constructor(row,col){
        this.row=row;
        this.col=col;
        this.inStorageLocation=false;
        this.image=loadImage('/assets/images/box.png');
    }

    drawBox(){
        image(this.image,this.col*SQUARE_SIDE,this.row*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
    }

    moveBoxUp(isEmpty){
        if(isEmpty) {
            this.row--;
            this.reviewLocation()
        }
    }

    moveBoxDown(isEmpty){
        if(isEmpty) {
            this.row++;
            this.reviewLocation()
        }
    }

    moveBoxRight(isEmpty){
        if(isEmpty) {
            this.col++;
            this.reviewLocation()
        }
    }

    moveBoxLeft(isEmpty){
        if(isEmpty) {
            this.col--;
            this.reviewLocation()
        }
    }

    reviewLocation(){
        if(game.searchForArray(game.storageLocations,[this.row,this.col])!==-1){
            this.image=loadImage('/assets/images/box-on-storage-location.png')
            this.inStorageLocation=true;
        }else{
            this.image=loadImage('/assets/images/box.png');
            this.inStorageLocation=false;
        }
        
    }

}