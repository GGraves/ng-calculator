angular.module('calc.services').factory('CalcService', function() {
  var self = this;

  var CalcService = {
    add: add,
    clear: clear,
    divide: divide,
    multiply: multiply,
    percent: percent,
    sign: sign,
    subtract: subtract
  };

  return CalcService;

  function add(accum, value) {
    return accum + value;
  }
  
  function clear() {
    return 0;
  }

  function divide(accum, value) {
    return accum / value;
  }
  
  function multiply(accum, value) {
    return accum * value;
  }
  
  function percent(accum) {
    return accum / 100;
  }
  
  function sign(accum) {
    return accum * -1;
  }
  
  function subtract(accum, value) {
    return accum - value;
  }

});


