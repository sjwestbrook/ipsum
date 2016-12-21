routerApp.controller('buffaloController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.buffalo = [
        {
            name: 'Autumn Bergerson',
            title: 'Employment Coordinator - W2/FSET',
            phone: '608-790-2380',
            email: 'bergersona@workforceconnections.org'
        },
        
        {
            name: 'Pam Taylor',
            title: 'Employment Coordinator - WIOA',
            phone: '608-386-1629',
            email: 'taylorp@workforceconnections.org'
        }
    ];    
});
