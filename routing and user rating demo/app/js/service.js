angular.module('vlocityApp').factory('peopleSvc',function($http,$q){
    var getPeople = function(){
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: "../people.json",
            dataType: 'json',
            contentType: "application/json"
            })
            .then(function (data) {
                defer.resolve(data);
            })
            .catch(function (data) {
                console.log("there was an error");
            });
            return defer.promise;
    }
    return{
        getPeople:getPeople
    }
});