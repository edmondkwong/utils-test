'use strict';

/* Services */

var utilServices = angular.module('utilServices', ['ngResource']);

utilServices.factory('UrlEncode', [function() {
}]);

utilServices.factory('AesEncode', ['$log',
  function($log) {
    var doEncrypt = function(aes) {
      var encrypted = CryptoJS.AES.encrypt(aes.input, aes.key, {});
      return encrypted.toString();
    };

    var doDecrypt = function(aes) {
      var plainText = CryptoJS.AES.decrypt(aes.input, aes.key, {});
      $log.info(plainText);
      return hex2a(plainText.toString());
    };

    function hex2a(hex) {
      var str = '';
      for (var i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      }
      return str;
    }

    return {
      doEncrypt: doEncrypt,
      doDecrypt: doDecrypt
    };
  }]);
