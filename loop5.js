let n = 352;
let reverse = 0;
let remainder;
while (n>0) {
    remainder = n % 10;
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
}
console.log(reverse);
