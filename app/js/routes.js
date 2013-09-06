(function () {
	angular.module('EventorApp').config(function ($routeProvider) {
 		var goToLoginPage;
		$routeProvider
		/*.when('/login', {
			templateUrl: 'login/login.html',
			controller: 'OmniauthController'
		})*/
		.when('/medals', {
			templateUrl: 'partials/medal-list.html',
			controller: 'EventController'
		})
		.when('/users', {
			templateUrl: 'partial/user-list.html',
			controller: 'EventController'
		});
	/*goToLoginPage = (function () {
		return { redirectTo: '/login' };
	}()); 
$routeProvider.otherwise(goToLoginPage);*/
	});
}());