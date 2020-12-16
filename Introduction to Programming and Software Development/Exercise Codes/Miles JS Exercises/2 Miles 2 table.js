
//  Miles.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-21 File created.   2016-11-21 Last modification.

/*  The result of the calculation is printed in four different
    ways in this program.
    
    It seems that you cannot format much with the standard
    util.format() function.

*/

const util = require( "util" ) ; // to access the util(ities) module

const tools = require( "./externals/tools.js" ) ; // for sprintf() and printf()

process.stdout.write( "\n This program prints a table that converts miles to kilometers." + "\n Press any key to continue" ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in the value.
   
   var distance_in_miles = 10;
   var distance_in_kilometers;
   var i = 0;
   
   
   if (i < 10) {
    process.stdout.write("\n      Miles    Kilometers");
   while (i != 10) {
    distance_in_kilometers  =  1.6093 * distance_in_miles ;
   tools.printf("\n %10.2f %10.2f",
                 distance_in_miles,  distance_in_kilometers);
    distance_in_miles = distance_in_miles + 10;
    i++; 
     }
     i = i++;
     process.stdout.write("\n");
   }
    
   if (i = 10) {
    process.stdout.write("\n    Kilometers   Miles");
    distance_in_kilometers = 10;
   while (i < 20) 
     {
    distance_in_miles  =  distance_in_kilometers / 1.6093 ;
   tools.printf( "\n %10.2f %10.2f",
                 distance_in_kilometers,  distance_in_miles);
    distance_in_kilometers = distance_in_kilometers + 10;
    i++;
     }
    }                    
   process.exit() ;

} ) ;



