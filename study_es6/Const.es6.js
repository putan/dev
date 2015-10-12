'use strict';

const X = 'test1';

if (true) {
    //X = 'aaaa'; // コンパイルエラーになる
    const X = 'test2';
    console.log(X);
}
console.log(X);
