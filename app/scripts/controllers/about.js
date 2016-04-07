'use strict';

/**
 * @ngdoc function
 * @name markAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the about me page
 */
angular.module('markAngularApp')
  .controller('AboutCtrl', ['navService' ,function (navService) {
  	//set the nav service to show the navigation bar
  	navService.set(true);
  }]);
