'use strict';

/**
 * @ngdoc function
 * @name markAngularApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the markAngularApp
 */
angular.module('markAngularApp')
  .controller('ProjectsCtrl',
  	['navService','$scope','$http',
  	function (navService,$scope,$http) {
  	//set the nav service to show the navigation bar
  	navService.set(true);

//retrieve the JSON data for all the projects and set the $scope
 $http.get('data/projects.json').success(function(data) {
    $scope.projects = data;
  });



  }]);
