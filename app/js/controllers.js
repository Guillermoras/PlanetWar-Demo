'use strict';

/* Controllers */

function MedalListCtrl($scope, Medal) {
  $scope.medals = Medal.query();
  $scope.orderProp = 'age';
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
  $scope.users = Medal.query();
  $scope.orderProp = 'name';
}


function UserDetailCtrl($scope, $routeParams, User) {
  $scope.user = User.get({userId: $routeParams.userId}, function(user) {
    $scope.mainImageUrl = user.images[0];
});

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}
