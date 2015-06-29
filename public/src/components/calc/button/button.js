//Button Directive in place for future extensibility if needed
//as well as basic templating
//and separation of concerns (oop)

angular.module('calc.directives')
.directive('button', function() {
  return {
    restrict: 'E',
    replace: 'true',
    scope: { 
      buttonObject: '@'
    },
    templateUrl: '/src/components/calc/button/button.html',
    link: function(scope, elem, attrs){
      scope.buttonObject = JSON.parse(scope.buttonObject);
      scope.value = scope.buttonObject.value;

      if(scope.buttonObject.flex === 1) {
        scope.buttonFlex = 'flex-one';
      } else {
        scope.buttonFlex = 'flex-two';
      }

      if(scope.buttonObject.type === 'clear' || scope.buttonObject.type === 'sign' || scope.buttonObject.type === 'percent'){
        scope.buttonColor = 'dark-grey';
      } else if(scope.buttonObject.type === 'divide' || scope.buttonObject.type === 'multiply' || scope.buttonObject.type === 'subtract' || scope.buttonObject.type === 'add' || scope.buttonObject.type === 'equals') {
        scope.buttonColor = 'orange';
      } else {
        scope.buttonColor = 'light-grey';
      }


    }
  };
});

