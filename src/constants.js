const WIDTH = 1000;
const HEIGHT = WIDTH;
const SQUARE_SIDE = WIDTH / 10;

const walls1=[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],
              [9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],
              [1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],
              [1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9]];
const storeLocations1=[[3,3],[6,6],[2,3]];
const boxesLocations1=[[6,7],[3,6],[5,5]];
const grass1=[];
const floor1=[];
const player1=new Player(1,1);