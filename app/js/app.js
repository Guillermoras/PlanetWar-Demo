'use strict';

/* App Module */

angular.module('planetwar', ['phonecatFilters', 'phonecatServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/json/medals', {templateUrl: 'partials/medal-list.html',   controller: PhoneListCtrl}).
      when('/json/medals/:medalId', {templateUrl: 'partials/medal-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/json/medals'});
}]);
