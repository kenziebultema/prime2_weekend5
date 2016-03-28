myApp.factory('PetService', ['$http', function($http){
    var pet = [];

    var getData = function(){
        $http.get('/pets').then(function(response){
            // console.log('get', response.data);
            pet.response = response.data;
            console.log('pet', pet);
        });
    };

    var deleteData = function(data){
        $http.delete('/pets/' + data).then(function(response){
            console.log('delete', response.data);
        });
        getData();
    };

    var postData = function(data){
        $http.post('/pets', data).then(function(response){
            console.log('post', response.data);
        });
    };

    return {
        getData: getData,
        postData: postData,
        deleteData: deleteData,
        pet: pet,
    };
}]);
