angular.module('calc.directives')
.directive('ggCalc', function() {
  return {
    restrict: 'E',
    replace: 'true',
    scope: {},
    templateUrl: '/src/components/calc/calc.html',
    controllerAs: 'calc',
    bindToController: true,
    controller: function($scope){
    }
  };
});
