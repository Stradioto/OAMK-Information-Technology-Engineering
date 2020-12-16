
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

process.stdout.write( "\n This program prints conversion tables." + "\n Type a letter to select a conversion table." 
+ "\n m miles to kilometers" + "\n k kilometers to miles" + "\n p pounds to kilograms" + "\n x to exit\n");

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in the value.
   
   var distance_in_miles;
   var distance_in_kilometers;
   var pounds;
   var kilograms;
   var user_selection = String( input_from_user ).charAt( 0 ) ;
   if (user_selection == "m") {
    process.stdout.write("\n      Miles    Kilometers");
    distance_in_miles = 10;
   while (distance_in_miles < 110) {
    distance_in_kilometers  =  1.6093 * distance_in_miles ;
   tools.printf("\n %10.2f %10.2f",
                 distance_in_miles,  distance_in_kilometers);
    distance_in_miles = distance_in_miles + 10; 
     }
     process.stdout.write("\n m miles to kilometers" + "\n k kilometers to miles" + "\n p pounds to kilograms" + "\n x to exit\n");
   } 
   else if (user_selection == "k") {
    process.stdout.write("\n    Kilometers   Miles");
    distance_in_kilometers = 10;
   while (distance_in_kilometers < 110) 
     {
    distance_in_miles  =  distance_in_kilometers / 1.6093 ;
   tools.printf( "\n %10.2f %10.2f",
                 distance_in_kilometers,  distance_in_miles);
    distance_in_kilometers = distance_in_kilometers + 10;
     }
     process.stdout.write("\n m miles to kilometers" + "\n k kilometers to miles" + "\n p pounds to kilograms" + "\n x to exit\n");
    } 
    else if (user_selection == "p") {
        process.stdout.write("\n        Pounds   Kilograms");
        pounds = 10;
       while (pounds < 110) 
         {
        kilograms  =  pounds / 0.4536 ;
       tools.printf( "\n %10.2f %10.2f",
                     pounds,  kilograms);
        pounds = pounds + 10;
     }
     process.stdout.write("\n m miles to kilometers" + "\n k kilometers to miles" + "\n p pounds to kilograms" + "\n x to exit\n");
    }  
    else if (user_selection = "x"){              
    process.exit() ;
    }

} ) ;



