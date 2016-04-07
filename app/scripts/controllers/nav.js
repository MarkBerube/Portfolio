'use strict';

/**
 * @ngdoc function
 * @name markAngularApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the navigation bar of the application
 */
angular.module('markAngularApp')
  .controller('navCtrl',['navService','$scope',
   function (navService,$scope) {
	 $scope.$watch(
    //returns the value being watched, returned on each $digest loop
    function() {
      return navService.get();
    },
    //listens for changes and sets the new value
    function(newValue, oldValue) {
      if (newValue !== oldValue) {
        //only set items if the value changed
        $scope.showNav = newValue;
      }
    }
  );

  }]);
