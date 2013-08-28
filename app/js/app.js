'use strict';

/* App Module */

angular.module('planetwar', ['medalFilters', 'medalServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/json/medals', {templateUrl: 'partials/medal-list.html',   controller: MedalListCtrl}).
      when('/json/medals/:medalId', {templateUrl: 'partials/medal-detail.html', controller: MedalDetailCtrl}).
      otherwise({redirectTo: '/json/medals'});
     /* when('json/users', {templateUrl: 'partials/user-list.html', controller: UserListCtrl}).
      when('json/users/:userId', {templateUrl: 'partials/user-detail.html', controller: UserDetailCtril}).
      otherwise({redirectTo: '/json/medals'});*/
}]);