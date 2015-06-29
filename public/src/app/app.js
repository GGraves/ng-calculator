angular.module('calcApp', ['calc.directives','calc.services', 'ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/app/home/home.tpl.html'
    });
});
angular.module('calc.directives', []);
angular.module('calc.services', []);
