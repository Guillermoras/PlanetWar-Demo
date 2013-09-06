'use strict';

/* Controllers */

//angular.module('planetwar-controllers', [])

/*function (){
  var getMainEvent,
  getSecondLevelEvents;
  App.controller('EventController' ['$scope', '$location', 'EventService', '$log', '$http', '$filter',
  function ($scope, $location, Event, $log, $http, $filter) {
    $scope.editMedal = function(id){
      Medal.update(id)
        .success(function(){
          $log.info('Medal updated');
        })
        .error(function(response){
          $log.error('Error encountered');
        });
    }
    $scope.editUser = function(id){
      User.update(id)
        .success(function(){
          $log.info('User updated');
        })
        .error(function(response){
          $log.error('Error encountered');
        });
    }
    $scope.deleteMedal = function(id){
      Medal.delete(id)
        .success(function(){
          $log.info('Medal deleted');
        })
        .error(function(response){
          $log.error('Error encountered');
        });
    }
    $scope.deleteUser = function(id){
      User.delete(id)
        .success(function(){
          $log.info('User deleted');
        })
        .error(function(response){
          $log.error('Error encountered');
        });
    }
    $scope.newMedal = function() {
      Medal.create($scope)
        .success(function() {
          $log.info('The medal was created successfully');
        })
        .error(function() {
          $log.error('Medal could not be created');
        });
    }
    $scope.newUser = function() {
      User.create($scope)
        .success(function() {
          $log.info('The user was created successfully');
        })
        .error(function() {
          $log.error('User could not be created');
        });
    }
}*/

function MedalListCtrl($scope, Medal) {
  $scope.medals = Medal.query();
  //$scope.orderProp = 'age';
}

function MedalDetailCtrl($scope, $routeParams, Medal) {
  $scope.medal = Medal.get({medalId: $routeParams.medalId}, function(medal) {
    $scope.mainImageUrl = medal.images[0];
});
  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}


function UserListCtrl($scope, User) {
  $scope.users = User.query();
  //$scope.orderProp = 'name';
}

function UserDetailCtrl($scope, $routeParams, User) {
  $scope.user = User.get({userId: $routeParams.userId}, function(user) {
    $scope.mainImageUrl = user.images[0];
});

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}