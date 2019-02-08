var app = angular.module('weatherApp',[]).controller('knorexCtrl',function($scope,weatherSvc){

    $scope.cityListArr = weatherSvc.cityArr;
    $scope.citySelected = {};
    var today = new Date();
    $scope.date = [];
    const date_format = 'YYYY-MM-DD';
    $scope.date.push(moment(new Date).format(date_format));
    for(let i =1; i <= 3 ;i++){
        $scope.date.push(moment(new Date).add(i,'days').format(date_format));

    }
    console.log($scope.date);
    console.log(moment(new Date));
    $scope.weatherArray = [];
    $scope.selectedCity = function(cityObj){
        $scope.weatherArray = [];
        console.log(cityObj);
       weatherSvc.getWeather(cityObj.id).then(function(resp){
           console.log(resp)
           for(let i = 0; i < $scope.date.length;i++){
               for(let j = 0; j < resp.list.length; j++){
                    resp.list[j].dt_txt = moment(resp.list[j].dt_txt).format(date_format);
                   if($scope.date[i] == resp.list[j].dt_txt){
                    $scope.weatherArray.push(resp.list[j])
                    break;
                   }
                  
               }
           
           }
           console.log($scope.weatherArray);

       }).catch(function(err){
        console.log(err);
       });
    }

});