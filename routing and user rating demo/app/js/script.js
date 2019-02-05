// Code goes here

var app = angular.module('vlocityApp', []);
app.controller('vlocityCtrl', function ($scope, $http, $timeout, peopleSvc) {
  $scope.people = [];
  $scope.currentPeople = {};
  $scope.people = peopleSvc.getPeople().then(function (data) {
    $scope.people = data.data.People;
    $scope.user = {'search':''};
    for(let i = 0; i < data.data.People.length; i++){
      if(data.data.People[i].Likes.length >= data.data.People[i].Dislikes.length)
      $scope.people[i].like_dislike = new Array(data.data.People[i].Likes.length);
      else
      $scope.people[i].like_dislike = new Array(data.data.People[i].Dislikes.length);

        for(let j = 0; j < data.data.People[i].Likes.length; j++){
          $scope.people[i].like_dislike[j] = {}
          $scope.people[i].like_dislike[j]['likes'] = data.data.People[i].Likes[j];
        }
        for(let j = 0; j < data.data.People[i].Dislikes.length; j++){
          $scope.people[i].like_dislike[j]['dislikes'] = data.data.People[i].Dislikes[j];
        }
     
    }
    $scope.selectedPeople($scope.people[0]);
  })
  $scope.selectedPeople = function (item) {
   
      $scope.currentPeople = item;

  }
  $scope.range = function (count) {
    var ratings = [];

    for (var i = 0; i < count; i++) {
      ratings.push(i)
    }

    return ratings;
  }
  $scope.clearSearch = function(){
    $scope.user.search = '';
  }
}).directive('starRating',function(){
  return{
    restrict:'E',
    scope:{
      starRating:'=?'
    },
    template:'<ul class="rating">' +
    '<li ng-repeat="star in stars track by $index" ng-class="{ratingsGiven:$index+1<=starRating}">' +
    '\u2605' +
    '</li>' +
    '</ul>',
    link:function(scope,elem,attr){
          
    },
    controller:function($scope){
      $scope.saveRating = $scope.starRating;
      $scope.stars = new Array(5);
    }

  }
});