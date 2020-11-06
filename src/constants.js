//menu window constants
const menuWidth=500;
const menuHeight=300;

//boarding game constants
const finalLevel=3;
const SQUARE_SIDE = 82;

//Level 1 constants:
const HEIGHT1 = SQUARE_SIDE*9;
const WIDTH1 = SQUARE_SIDE*7;
const walls1=[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
              [1,0],[1,1],[1,2],[1,6],[2,0],[2,1],[2,2],[2,3],[2,6],
              [3,0],[3,3],[3,5],[3,6],[4,0],[4,5],[4,6],[5,0],[5,3],[5,5],[5,6],
              [6,0],[6,1],[6,6],[7,0],[7,1],[7,2],[7,6],
              [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6]];
const storageLocations1=[[1,3],[7,4]];
const boxesLocations1=[[5,2],[6,3]];
const grass1=[];
const floor1=[[1,4],[1,5],[2,4],[2,5],[3,1],[3,2],[3,4],[4,1],[4,2],[4,3],[4,4],
              [5,1],[5,2],[5,4],[6,2],[6,3],[6,4],[6,5],[7,3],[7,4],[7,5]];
const player1=[6,2];

//Level 2 constants:
const HEIGHT2 = SQUARE_SIDE*9;
const WIDTH2 = SQUARE_SIDE*8;
const walls2=[[0,1],[0,2],[0,3],[0,4],[1,1],[1,4],[2,0],[2,1],[2,4],[3,0],[3,4],[3,5],[3,6],[3,7],
              [4,0],[4,7],[5,0],[5,1],[5,2],[5,3],[5,7],[6,3],[6,6],[6,7],[7,3],[7,6],[8,3],[8,4],[8,5],[8,6]];
const storageLocations2=[[3,3],[4,4],[4,3]];
const boxesLocations2=[[2,3],[4,2],[5,4]];
const grass2=[[0,0],[0,5],[0,6],[0,7],[1,0],[1,5],[1,6],[1,7],[2,5],[2,6],[2,7],[6,0],[6,1],[6,2],
              [7,0],[7,1],[7,2],[7,7],[8,0],[8,1],[8,2],[8,7]];
const floor2=[[1,2],[1,3],[2,2],[2,3],[3,1],[3,2],[4,1],[4,2],[4,5],[4,6],[5,4],[5,5],[5,6],[6,4],[6,5],[7,4],[7,5]];
const player2=[1,2];


//Level 3 constants:
const HEIGHT3 = SQUARE_SIDE*9;
const WIDTH3 = SQUARE_SIDE*9;
const walls3=[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[1,0],[1,1],[1,8],
              [2,0],[2,3],[2,4],[2,5],[2,6],[2,8],[3,0],[3,3],[3,6],[3,8],
              [4,0],[4,3],[4,8],[5,0],[5,1],[5,7],[5,8],[6,0],[6,4],[6,5],[6,7],[7,0],[7,7],
              [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7]];
const boxesLocations3=[[3,2],[5,3],[6,2],[6,3]];
const storageLocations3=[[3,4],[3,5],[4,4],[4,5]];
const grass3=[[0,0],[6,8],[7,8],[8,8]];
const floor3=[[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[2,1],[2,2],[2,7],
              [3,1],[3,2],[3,7],[4,1],[4,2],[4,6],[4,7],[5,2],[5,3],[5,4],[5,5],[5,6],[6,1],[6,2],[6,3],[6,6],
              [7,1],
              [7,2],[7,3],[7,4],[7,5],[7,6]];
const player3=[3,1];

//Level 4
const HEIGHT4 = SQUARE_SIDE*9;
const WIDTH4 = SQUARE_SIDE*9;
const walls4=[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[1,0],[1,1],[1,8],
              [2,0],[2,3],[2,4],[2,5],[2,6],[2,8],[3,0],[3,3],[3,6],[3,8],
              [4,0],[4,3],[4,8],[5,0],[5,1],[5,7],[5,8],[6,0],[6,4],[6,5],[6,7],[7,0],[7,7],
              [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7]];
const boxesLocations4=[[3,2],[5,3],[6,2],[6,3]];
const storageLocations4=[[3,4],[3,5],[4,4],[4,5]];
const grass4=[[0,0],[6,8],[7,8],[8,8]];
const floor4=[[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[2,1],[2,2],[2,7],
              [3,1],[3,2],[3,7],[4,1],[4,2],[4,6],[4,7],[5,2],[5,3],[5,4],[5,5],[5,6],[6,1],[6,2],[6,3],[6,6],
              [7,1],
              [7,2],[7,3],[7,4],[7,5],[7,6]];
const player4=[3,1];
