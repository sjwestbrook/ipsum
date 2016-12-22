routerApp.controller('ipsumController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.ipsum = [
        {
            sentence: "Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you!"
        },        
        {
            sentence: "Stop bickering or I'm going to come back there and change your opinions manually!"
        },
        {
            sentence: "We don't have a brig."
        },
        {
            sentence: "Dear God, they'll be killed on our doorstep!"
        },
        { 
            sentence: "And there's no trash pickup until January 3rd."
        }
        
    ];    
});
