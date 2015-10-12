'use strict';

var x = 1;
if (true) {
    let x = 2;
    if (true) {
        let x = 3;
        console.log(x);
    }
    console.log(x);
}
console.log(x);
