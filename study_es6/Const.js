'use strict';

var X = 'test1';

if (true) {
    //X = 'aaaa'; // コンパイルエラーになる
    var _X = 'test2';
    console.log(_X);
}
console.log(X);
