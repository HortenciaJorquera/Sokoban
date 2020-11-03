class Box {

    constructor(row,col){
        this.row=row;
        this.col=col;
        this.image=loadImage('/assets/images/box.png');
    }

    drawBox(){
        image(this.image,this.col*SQUARE_SIDE,this.row*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
    }

    moveBoxUp(isEmpty){
        if(isEmpty) {
            this.row--;
            this.isInStorageLocation(game.storeLocations)
        }
    }

    moveBoxDown(isEmpty){
        if(isEmpty) {
            this.row++;
            this.isInStorageLocation(game.storeLocations)
        }
    }

    moveBoxRight(isEmpty){
        if(isEmpty) {
            this.col++;
            this.isInStorageLocation(game.storeLocations)
        }
    }

    moveBoxLeft(isEmpty){
        if(isEmpty) {
            this.col--;
            this.isInStorageLocation()
        }
    }

    isInStorageLocation(){
        for (let location of game.storeLocations)
            if(this.row===location[0] && this.col===location[1]){
                //console.log('the box in '+ location+ ' should turn blue')
                this.image=loadImage('/assets/images/box-on-storage-location.png')
                }
            else{
                this.image=loadImage('/assets/images/box.png');

            }

    }

}