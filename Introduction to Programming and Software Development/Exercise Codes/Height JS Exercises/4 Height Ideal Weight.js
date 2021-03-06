
//  Game.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-18 File created.   2017-08-10 Last modification.

process.stdout.write( "\n This program can convert your height."
                    + "\n Please, type in your height in centimeters: " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in a number.

   var user_height = Number( input_from_user ) ;
   var converted_to_inches = user_height / 2.54;
   var feet = Math.floor(converted_to_inches / 12);
   var inches = Math.floor(converted_to_inches % 12);

   process.stdout.write("\n Your height in inches is: " + converted_to_inches + "."
                      + "\n This is " + feet + " feet and "+ inches + " inches. \n"
                      + "\n Ideal weight for man: " + (52+1.9*((feet-5)*12+inches)) + "\n Ideal weight for woman: " + (49+1.7*((feet-5)*12+inches))
                      + "\n");

   if ( user_height < 60 )
   {
   process.stdout.write("\n Only " + user_height + " centimeters!" + "\n Are you really so short?" ) ;
   }
   if ( user_height > 160 && user_height < 190)
   {
   process.stdout.write("\n That is a quite average height. \n") ; 
   }
   if (user_height > 400)
   {
      process.stdout.write("\n You might be a giraffe!");
   }

   process.exit() ;

} ) ;

//  Another possibility to output text is to use the console.log() function.
//  console.log() automatically adds a newline after the given text.
//  process.stdout.write() does not do that.


