//1
if (Number.isInteger(7)) {
    console.log('true');
  } else { 
  console.log('false');
}

//2
let data = 5;
if(typeof data === 'number') {
    let remainder = (data % 1);
    if(remainder === 0) {
        console.log('integer');
    }
    else (isNaN(remainder)) 
        console.log('not integer');
    }
