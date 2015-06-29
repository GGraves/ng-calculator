angular.module('calc.directives')
.directive('screen', function() {
  return {
    restrict: 'E',
    replace: 'true',
    scope: { 
      accumulator: '='
    },
    templateUrl: '/src/components/calc/screen/screen.html',
    controllerAs: 'screen',
    bindToController: true,
    controller: function(){
      var self = this;
    }
  };
});

