class Box {
    
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.inStorageLocation = false;
    this.image = loadImage("assets/images/box.png");
    this.old = [row, col, 0];
  }

  drawBox() {
    image(
      this.image,
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }

  moveBoxUp(isEmpty) {
    this.old[1] = this.col;
    if (isEmpty) {
      this.old[0] = this.row;
      this.row--;
      this.reviewLocation();
    }
  }

  moveBoxDown(isEmpty) {
    this.old[1] = this.col;
    if (isEmpty) {
      this.old[0] = this.row;
      this.row++;
      this.reviewLocation();
    }
  }

  moveBoxRight(isEmpty) {
    this.old[0] = this.row;

    if (isEmpty) {
      this.old[1] = this.col;
      this.col++;
      this.reviewLocation();
    }
  }

  moveBoxLeft(isEmpty) {
    this.old[0] = this.row;

    if (isEmpty) {
      this.old[1] = this.col;
      this.col--;
      this.reviewLocation();
    }
  }

  reviewLocation() {
    if (
      game.searchForArray(game.storageLocations, [this.row, this.col]) !== -1
    ) {
      this.image = loadImage("assets/images/box-on-storage-location.png");
      this.inStorageLocation = true;
    } else {
      this.image = loadImage("assets/images/box.png");
      this.inStorageLocation = false;
    }
  }

  undo() {
    this.row = this.old[0];
    this.col = this.old[1];
  }
}
