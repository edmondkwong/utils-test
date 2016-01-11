'use strict';

/* App Module */

var utilApp = angular.module('utilApp', [
  'ngRoute',
  //'phonecatAnimations',

  'utilControllers',
  //'phonecatFilters',
  'utilServices'
]);

utilApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
    when('/urlencode', {
      templateUrl: 'partials/urlencode.html',
      controller: 'UrlEncodeCtrl'
    }).
    when('/aes', {
      templateUrl: 'partials/aes.html',
      controller: 'AesCtrl'
    }).
    when('/md5', {
      templateUrl: 'partials/md5.html'
      //controller: 'PhoneDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);
