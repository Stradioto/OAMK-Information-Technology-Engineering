var array = [];
var array_Mines = [];

process.stdout.write("\n Welcome to - Mine Field Walker Game!" + 
                     "\n Don´t ask how and don´t ask why but you are inside a minefield!" +
                     "\n Type f to walk front" + "\n Type r to walk right" + "\n Type l to walk left" +
                     "\n Press x to exit" + 
                     "\n Reach the exit E to win the game! Or die trying..." )


function guardaArray() //Generate array
{
for (var fAux=0;fAux<11;fAux++)
    {        
        array[fAux] = [];
        
     for (var sAux=0;sAux<7;sAux++)
     {
        if(fAux==0||fAux==10)
            array[fAux][sAux] = "Y";
        else if(sAux ==0||sAux==6)
            array[fAux][sAux] = "Y";
        else if(fAux == 9 && sAux == 3)
            array[fAux][sAux] = "E";
        else if(fAux ==1 && sAux==3)
            array[fAux][sAux] = "O";
        else
            array[fAux][sAux] = "¨"; 
     } 
    }

return array;
}

function imprimeArray() //Write array
{
    for (var fAux=0;fAux<11;fAux++)
    {        
     for (var sAux=0;sAux<7;sAux++)
     {
            process.stdout.write(" " + array[fAux][sAux]);           
     } 
     process.stdout.write("\n");
    }
}

function mines(max, min) //Generate coord for the mines
{
    array_Mines[0] = [];
    array_Mines[1] = [];
    for (aux = 0;aux < 11;aux++) { 
    array_Mines[0][aux] = Math.floor(Math.random() * (max - min)) + min;
    array_Mines[1][aux] = Math.floor(Math.random() * (max - min)) + min;
    //process.stdout.write("\n" + array_Mines[0][aux] + "\n" +
                         //" " + array_Mines[1][aux]);
    }
return array_Mines;
}

process.stdout.write("\n" + "\n");
guardaArray();
imprimeArray();
mines(10, 1);
process.stdout.write("\n");

function jogar() //Player control and Collision with mines/exit
{
var x = 1; 
var y = 3;    
process.stdin.on( "data", function( input_from_user )
{
var user_selection = String( input_from_user ).charAt( 0 ) ;
 if (user_selection == "f" && array[x+1][y] != "Y") {  
    array[x][y] = ".";
    x = x+1;
    for (let i=0;i<9;i++) {
    if (array_Mines[0][i] == x && array_Mines[1][i] == y) { 
     array[x][y] = "X";
     var youLost = true;
     }
     else{
        array[x][y] = "O"; 
     }
    }
    }
 if (user_selection == "r" && array[x][y+1] != "Y") { 
     array[x][y] = "."; 
     y = y+1; 
     for (let i=0;i<9;i++) {
     if (array_Mines[0][i] == x && array_Mines[1][i] == y) { 
     array[x][y] = "X";
     var youLost = true;
     }
     else{
     array[x][y] = "O";  
     }
    }
    }
 if (user_selection == "l" && array[x][y-1] != "Y") {
      array[x][y] = "."; 
      y = y-1; 
      for (let i=0;i<9;i++) {
        if (array_Mines[0][i] == x && array_Mines[1][i] == y) { 
        array[x][y] = "X";
        var youLost = true;
        }
        else{
        array[x][y] = "O";  
        }
       }
       }
  if (user_selection == "x") {
      process.exit();
    }

  if (x == 9 && y == 3) {
     array[x][y] = "E";
     imprimeArray();
     process.stdout.write("\n" + "You won!" + "\n"); 
     process.exit();
    }
    
  if (youLost == true) {
     array[x][y] = "X";
     imprimeArray();
     process.stdout.write("\n" + "Wasted!");
     process.exit();   
    }
    else { process.stdout.write("\n" + "Choose between f(ront), r(right) or l(left) to move and e(x)it to leave!" + "\n");
    process.stdout.write("\n");
    imprimeArray();
    process.stdout.write("\n"); 
    }
});
}

jogar();

