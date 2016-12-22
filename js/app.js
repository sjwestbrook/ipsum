var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/ipsum');
    
    $stateProvider
            
    // HOME PAGE AND NESTED NAMED VIEWS =================================
    .state('home', {
        url: '/index',
        'columnLeft@home': { 
            templateUrl: './partials/ipsum.html',
            controller: 'ipsumController'
        }

    });
  
});
