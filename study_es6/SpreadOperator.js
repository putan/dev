'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function sum() {
    var sum = 0;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    console.log('sum(' + args + ')');
    for (var i in args) {
        sum += parseInt(args[i]);
    }
    console.log('------');

    return sum;
}

var x = [1, 2, 3];
var y = [4, 5, 6];
var z = [].concat(y, [7, 8, 9]);
console.log('   ' + sum.apply(undefined, x.concat(_toConsumableArray(z))));
