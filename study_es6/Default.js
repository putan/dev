'use strict';

var def = function def(name) {
  var version = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];
  return console.log(name + ':' + version);
};

def('a', 5);
def('b');
