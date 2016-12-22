var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/index');
    
    $stateProvider
            
    // HOME PAGE AND NESTED NAMED VIEWS =================================
    .state('ipsum', {
        url: '/ipsum',
        'columnLeft@ipsum': { 
            templateUrl: './partials/ipsum.html',
            controller: 'ipsumController'
        }

    });
  
});
