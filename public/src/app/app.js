angular.module('calcApp', ['calc.components', 'ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/app/home/home.tpl.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'src/app/about/about.tpl.html'
    });
});
angular.module('calc.components', []);
