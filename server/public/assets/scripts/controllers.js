myApp.controller('AddController', ['$scope', 'PetService', function($scope, PetService){
    console.log('add connected');
    var petObject = {};

    $scope.submit = function(data){
        PetService.postData(data);
        PetService.getData();
    }
}]);

myApp.controller('ViewController', ['$scope', 'PetService', function($scope, PetService){
    var petService = PetService;
    console.log('view connected');
    petService.getData();

    $scope.petArray = petService.pet;
    console.log('pet array', $scope.petArray);
}]);
