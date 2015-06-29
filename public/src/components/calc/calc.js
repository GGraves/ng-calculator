angular.module('calc.directives')
.directive('ggCalc', function() {
  return {
    restrict: 'E',
    replace: 'true',
    scope: {},
    templateUrl: '/src/components/calc/calc.html',
    controllerAs: 'calc',
    bindToController: true,
    controller: function($scope, CalcService){

      var self = this;
     
      self.buttons = [
        {'type': 'clear', 'value': 'C'}, 
        {'type': 'sign', 'value': '+/-'}, 
        {'type': 'percent', 'value': '%'}, 
        {'type': 'divide', 'value': '/'}, 
        {'type': 'number', 'value': 7}, 
        {'type': 'number', 'value': 8}, 
        {'type': 'number', 'value': 9}, 
        {'type': 'multiply', 'value': 'x'},
        {'type': 'number', 'value': 4}, 
        {'type': 'number', 'value': 5}, 
        {'type': 'number', 'value': 6}, 
        {'type': 'minus', 'value': '-'},
        {'type': 'number', 'value': 1}, 
        {'type': 'number', 'value': 2}, 
        {'type': 'number', 'value': 3}, 
        {'type': 'add', 'value': '+'},
        {'type': 'number', 'value': 0}, 
        {'type': 'decimal', 'value': '.'},
        {'type': 'equals', 'value': '='}
      ];
      //CalcService.add();
      //CalcService.clear();
      //CalcService.decimal();
      //CalcService.divide();
      //CalcService.equals();
      //CalcService.multiply();
      //CalcService.percent();
      //CalcService.sign();
      //CalcService.subtract();

    }
  };
});
