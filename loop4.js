let a = 12;
let sum = 0;
for(let i = 1; i <= a/2; i++) {
    if(a % i === 0){ 
    sum += i;
    }
 if(sum = a){
   console.log('The number is perfect');
 } else {
   console.log('The number is not perfect');
 } 
    }
