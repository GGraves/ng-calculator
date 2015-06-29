angular.module('calc.directives')
.directive('button', function() {
  return {
    restrict: 'E',
    replace: 'true',
    scope: { 
      buttonValue: '@'
    },
    templateUrl: '/src/components/calc/button/button.html',
    controllerAs: 'btn',
    bindToController: true,
    controller: function(){
      var self = this;
      console.log(self.buttonValue);
      //Button Directive in place for future extensibility if needed
      //as well as basic templating
      //and separation of concerns (oop)
    }
  };
});

