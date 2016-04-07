'use strict';

/**
 * @ngdoc function
 * @name markAngularApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the single project page
 */
angular.module('markAngularApp')
  .controller('ProjectCtrl',
  ['navService','$scope','$http','$routeParams', function (navService,$scope,$http,$routeParams) {
  	//set the nav service to show the navigation bar
  	navService.set(true);

//retrieve the JSON data for this specific project and set the $scope
 $http.get('data/projects.json').success(function(data) {

    $scope.projects = data;
    $scope.selectedName = $routeParams.projectURL;

  });

  }]);
