'use strict';

function sum(...args) {
    let sum=0;
    for (let i in args) {
        sum += parseInt(args[i]);
    }

    return sum;
}

console.log(sum(1,3,5,7,9));
