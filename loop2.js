let number = 6878453;
let length = 0;
for(i = number; i > 1; i++){
     length++;
     i = Math.floor(i/10);
}
console.log(length);
