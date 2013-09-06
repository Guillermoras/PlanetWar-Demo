'use strict';

/* App Module */

/*angular.module('app', ['planetwar-medals','planetwar-users']);


angular.module('planetwar-medals', ['medalFilters', 'medalServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/medals/list', {templateUrl: 'partials/medal-list.html',   controller: MedalListCtrl}).
      when('/json/medals/:medalId', {templateUrl: 'partials/medal-detail.html', controller: MedalDetailCtrl}).
      otherwise({redirectTo: '/json/medals'});
}]);

angular.module('planetwar-users', ['userFilters', 'userServices']).
  config(['$routeProvider', function($routeProvider) {
  	$routeProvider
   	  .when('json/users', {templateUrl: 'partials/user-list.html', controller: UserListCtrl})
      .when('json/users/:userId', {templateUrl: 'partials/user-detail.html', controller: UserDetailCtrl}).
      otherwise({redirectTo: 'json/users'});
}]);*/

angular.module('planetarywarfare', ['userFilters', 'userServices', 'medalFilters', 'medalServices']).
  config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('users/list', {templateUrl: 'partials/user-list.html', controller: UserListCtrl})
      .when('json/users', {templateUrl: 'partials/user-detail.html', controller: UserDetailCtrl})
      when('/medals/list', {templateUrl: 'partials/medal-list.html',   controller: MedalListCtrl}).
      when('/json/medals', {templateUrl: 'partials/medal-detail.html', controller: MedalDetailCtrl})}]);
  }]);

/*angular.bootstrap(document.getElementById("medalsDiv"), ["planetwar-medals"]);
angular.bootstrap(document.getElementById("usersDiv"), ["planetwar-users"]);*/