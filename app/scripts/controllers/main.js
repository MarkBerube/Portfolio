'use strict';

/**
 * @ngdoc function
 * @name markAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the main homepage of the angular application
 */
angular.module('markAngularApp')
  .controller('MainCtrl',['navService', function (navService) {
  	//set the nav service to hide the navigation bar.
  	navService.set(false);
  }]);