angular.module('knorexApp').factory('weatherSvc',function($http,$q){
    const cityArr = [{
        "id": 1566083,
        "name": "Thanh pho Ho Chi Minh",
        "country": "VN",
        "coord": {
          "lon": 106.666672,
          "lat": 10.75
        }
      },
      {
        "id": 1880252,
        "name": "Singapore",
        "country": "SG",
        "coord": {
          "lon": 103.850067,
          "lat": 1.28967
        }
      },
      {
        "id": 1733046,
        "name": "Kuala Lumpur",
        "country": "MY",
        "coord": {
          "lon": 101.686531,
          "lat": 3.14309
        }
      },
      {
        "id": 1850147,
        "name": "Tokyo",
        "country": "JP",
        "coord": {
          "lon": 139.691711,
          "lat": 35.689499
        }
      },
      {
        "id": 4505542,
        "name": "Athens",
        "country": "US",
        "coord": {
          "lon": -82.101257,
          "lat": 39.329239
        }
      },
    ];
    const appId = '8d30ba8a1d8b05ed1e6a3d8db39a159b';
    var getWeather = function(cityId){
        console.log(cityId)
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: "https://api.openweathermap.org/data/2.5/forecast?id="+cityId+'&appId='+appId,
            dataType: 'json',
            contentType: "application/json"
            })
            .then(function (data) {
                defer.resolve(data.data);
            })
            .catch(function (data) {
                console.log("there was an error");
            });
            return defer.promise;
    }

    return{
        cityArr:cityArr,
        getWeather:getWeather
    }
});