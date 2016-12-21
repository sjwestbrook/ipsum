var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATE ========================================
//         .state('home', {
//             url: '/home',
//             templateUrl: './partials/home.html'
//         })           
    
        .state('home', {
            url: '/home',
            views: {
                '': { 
                    templateUrl: './partials/home.html' 
                },
                'ipsum@ipsum': { 
                    templateUrl: './partials/ipsum.html',
                    controller: 'ipsumController'
                }
            }
        });
    
});
