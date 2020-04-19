const answer = prompt('Which planet is closest to the sun?');

if ( answer.toUpperCase() === 'MERCURY' ) {
  document.write('<p><h1 style="text-align: center;">That\'s correct!</h1></p>');
  console.log("That's correct!");
} else {
  document.write('<p><h1 style="text-align: center;">Sorry, that\'s incorrect!</h1></p>');
  console.log("Sorry, that's incorrect!");
}