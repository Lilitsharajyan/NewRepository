let number = prompt();  
if(((number < 0)&&(number % 2 === 1)) || (number > 0)) {
  console.log('Accepted');
} else {
  console.log('Not accepted');
}
