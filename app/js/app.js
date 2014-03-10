'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listView', {templateUrl: 'partials/listView.html', controller: 'ListCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  //$routeProvider.when('/detailView', {templateUrl: 'partials/detailView.html', controller: 'DetailCtrl'});
  $routeProvider.otherwise({redirectTo: '/listView'});
}]);
