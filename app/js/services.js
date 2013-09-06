'use strict';

/* Services */

angular.module('medalServices', ['ngResource']).
    factory('Medal', function($resource){
  return $resource('json/medals/:medalId.json', {}, {
    query: {method:'GET', params:{medalId:'PlanetaryMedal'}, isArray:true}
  });
});

angular.module('userServices', ['ngResource']).
    factory('User', function($resource){
  return $resource('json/users/:userId.json', {}, {
    query: {method:'GET', params:{userId:'PlanetaryUser'}, isArray:true}
  });
});