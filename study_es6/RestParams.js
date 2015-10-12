'use strict';

function sum() {
    var sum = 0;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    for (var i in args) {
        sum += parseInt(args[i]);
    }

    return sum;
}

console.log(sum(1, 3, 5, 7, 9));
