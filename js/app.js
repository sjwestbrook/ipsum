var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATE ========================================
        .state('home', {
            url: '/home',
            templateUrl: './partials/home.html'
        })
        
     
      
    
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('home', {
            url: '/home',
            views: {
                '': { templateUrl: './partials/home.html' },
                'columnLeft@home': { template: 'Look I am a column!' },
                'columnRight@home': { 
                    templateUrl: './partials/ipsum.html',
                    controller: 'ipsumController'
                }
            }            
        });
  
});
