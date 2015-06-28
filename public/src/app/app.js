angular.module('calcApp', ['calc.components']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

});
