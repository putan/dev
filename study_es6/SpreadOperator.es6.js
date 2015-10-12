'use strict';

function sum(...args) {
    let sum=0;
    console.log('sum(' + args + ')');
    for (let i in args) {
        sum += parseInt(args[i]);
    }
    console.log('------');

    return sum;
}

var x = [1, 2, 3];
var y = [4, 5, 6];
var z = [...y, 7, 8, 9];
console.log('   ' + sum(...x, ...z));
