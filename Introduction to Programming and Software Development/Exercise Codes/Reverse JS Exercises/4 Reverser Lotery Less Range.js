
//  Reverse.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-19 File created.   2017-08-14 Last modification.

var given_numbers = [] ;

var random_numbers  =  [] ; // this array is initially empty

var array_Temp = [];

process.stdout.write( "\n This program reads numbers bigger than 0 and lesser than 41."
                   +  "\n After receiving a zero, it prints the numbers"
                   +  "\n in given order. Please, start entering numbers."
                   +  "\n The program will stop when you enter a zero.\n\n" ) ;

process.stdout.write( "   "  +  given_numbers.length 
                   +  "  Enter a number: ") ;

process.stdin.on( "data", function( input_from_user )
{
   // This function will be executed always after
   // the user has typed in a number.

   var number_from_keyboard = Number( input_from_user ) ;
   // The push() method adds the number to the end of the array.

   var number_previously_given = false ;
   // given_numbers.length now tells how many numbers have been given
   // before the current number.
   for ( let index_for_previous_numbers = 0 ; index_for_previous_numbers < given_numbers.length ;  index_for_previous_numbers ++ )
   {
   if ( given_numbers[ index_for_previous_numbers ] == number_from_keyboard )
   {
   process.stdout.write( "\n That number has already been given.\n" );
   number_previously_given = true;
   // Here you have to modify the ’boolean’ variable.
   }
   }

   if (number_from_keyboard < 15 && given_numbers.length < 7 && number_previously_given == false) {
   given_numbers.push( number_from_keyboard ) ;
   random_numbers.push( Math.floor( Math.random() * 14 + 1 ) ) ;
   }
   else if (number_from_keyboard == 0){
   process.stdout.write( "    Finalized \n");
   }
   else {
    process.stdout.write( "Number out of defined range(1 - 40) or max length reached(7). \n");
   }



   if ( number_from_keyboard == 0 )
   {
      process.stdout.write( "\n Numbers are:  " + given_numbers) ;
      process.stdout.write( "\n Lotery numbers are:  " + random_numbers) ;
      for ( let i = 0 ; i < given_numbers.length ; i++ ) 
      {
         for (let j = 0 ; j < random_numbers.length ; j++ )
      {
         if (given_numbers[i] == random_numbers[j])
       {
         array_Temp.push(given_numbers[i]);
         
       }

      }
      
   }
      process.stdout.write( "\n You have:  " + array_Temp.length + " Numbers: " + array_Temp) ;
      //var number_index = given_numbers.length ;
      process.stdout.write( "\n\n" ) ;
      process.exit() ;  // This terminates the program. 
   }
   else
   {
      // We are not finished. Let's ask for one more number.
      // The length property tells how many elements the array has,
      // i.e. how many numbers have been entered.

      process.stdout.write( "   "  +  given_numbers.length 
                         +  "  Enter a number: ") ;
   }
} ) ;