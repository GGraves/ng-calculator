angular.module('calc.directives')
.directive('ggCalc', function() {
  return {
    restrict: 'E',
    replace: 'true',
    scope: {},
    templateUrl: '/src/components/calc/calc.html',
    controllerAs: 'calc',
    bindToController: true,
    controller: function(CalcService) {
      
      var self = this;
      self.accum = 0;
      self.buttonClick = buttonClick;
      self.buttonSet = buttonSet();
      prevOperator = null;
      
      //set an array of buttons to be processed 
      //in object array format for extensibility 
      function buttonSet() {
        return [
          [{'type': 'clear', 'value': 'C', 'flex': 1}, 
            {'type': 'sign', 'value': '±', 'flex': 1}, 
            {'type': 'percent', 'value': '%', 'flex': 1}, 
            {'type': 'divide', 'value': '÷', 'flex': 1}],
          [{'type': 'number', 'value': 7, 'flex': 1}, 
            {'type': 'number', 'value': 8, 'flex': 1}, 
            {'type': 'number', 'value': 9, 'flex': 1}, 
            {'type': 'multiply', 'value': '×', 'flex': 1}],
          [{'type': 'number', 'value': 4, 'flex': 1}, 
            {'type': 'number', 'value': 5, 'flex': 1}, 
            {'type': 'number', 'value': 6, 'flex': 1}, 
            {'type': 'minus', 'value': '-', 'flex': 1}],
          [{'type': 'number', 'value': 1, 'flex': 1}, 
            {'type': 'number', 'value': 2, 'flex': 1}, 
            {'type': 'number', 'value': 3, 'flex': 1}, 
            {'type': 'add', 'value': '+', 'flex': 1}],
          [{'type': 'number', 'value': 0, 'flex': 2}, 
            {'type': 'decimal', 'value': '.', 'flex': 1}, 
            {'type': 'equals', 'value': '=', 'flex': 1}]
        ];
      }

      //generic buttonClick function executed when any button is clicked
      //the button object passed as parameter for purposes of calculation
      function buttonClick(button){

        //check to see if object is of type number
        //else, call associated CalcService function
        if(button.type === 'number') {
          numberInput(button.value);
        } else if(button.type === 'clear') {
          clearAll();
        }
      }

      //manipulate the value of the accumulator
      function numberInput(value) {
        if(prevOperator) {
          self.accum = value;
        } else if(self.accum === 0){
          self.accum = value;
        } else {
          if(self.accum.toString().length < 9) {
            self.accum = Number(self.accum.toString() + value.toString());
          }
        }
      }

      function clearAll() {
        self.accum = 0; 
        prevOperator = null;
      }

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
