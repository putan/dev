'use strict';

var x = 1;
if (true) {
    var _x = 2;
    if (true) {
        var _x2 = 3;
        console.log(_x2);
    }
    console.log(_x);
}
console.log(x);
