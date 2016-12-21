routerApp.controller('ipsumController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.ipsum = [
        {
            sentence: "Stop!"
        },
        
        {
            name: 'Pam Taylor',
            title: 'Employment Coordinator - WIOA',
            phone: '608-386-1629',
            email: 'taylorp@workforceconnections.org'
        }
    ];    
});
