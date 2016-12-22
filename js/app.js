var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/index');
    
    $stateProvider
            
    // HOME PAGE AND NESTED NAMED VIEWS =================================
    .state('index', {
        url: '/index',
        'columnLeft@ipsum': { 
            templateUrl: './partials/ipsum.html',
            controller: 'ipsumController'
        }

    });
  
});
