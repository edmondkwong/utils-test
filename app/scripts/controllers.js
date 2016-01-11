'use strict';

/* Controllers */

var utilControllers = angular.module('utilControllers', []);

utilControllers.controller('UrlEncodeCtrl', ['$scope', '$routeParams', 'UrlEncode',
  function ($scope, $routeParams, UrlEncode) {
  }]);


utilControllers.controller('AesCtrl', ['$scope', '$routeParams', 'AesEncode', '$log',
  function ($scope, $routeParams, AesEncode, $log) {



    $scope.callEncrypt = function () {
      $log.info(this.input);
      $scope.output = AesEncode.doEncrypt(this.aes);
    };

    $scope.callDecrypt = function () {
      $log.info(this.input);
      $scope.output = AesEncode.doDecrypt(this.aes);
    };


  }]);
