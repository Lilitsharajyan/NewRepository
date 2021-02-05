//1
let x = 10;
let y = 'y';
let z = 25;
console.log(x);
console.log(y);
console.log(z);


//2
let x = 60;
let y = 11;
let sum = x + y;
let dif = x - y;
let prod = x * y;
let quot = x / y;
let rem = x % y;
console.log('The sum of ' + x + ' and ' + y + ' is ' + sum);
console.log('The differnece ' + x + ' and ' + y +  ' is ' + dif);
console.log('The product ' + x + ' and ' + y + ' is ' + prod);
console.log('The quotient ' + x + ' and ' + y + ' is ' + quot);
console.log('The remainder ' + x + ' and ' + y + ' is ' + rem);

//3
let person = prompt("Please enter your name");
alert("Hello, " + person + "!");

//4
let number = 1625;
lastDigit = 1625 % 10;
console.log("The last digit of " + number + " is " + lastDigit);

//5
let x = -6541;
let result =  Math.abs(x); 
console.log(result);

//6
let meter = 1;
let x = meter;
let inch = 39.3701;
for( x = 1; x < 7; x++){
  result = x * inch;
  console.log(result);
}

//7
var a = Math.abs(-35.4);
var b = Math.abs(null);
var c = Math.abs("Hello");
console.log(a);
console.log(b);
console.log(c);
