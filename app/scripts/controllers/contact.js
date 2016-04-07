'use strict';

/**
 * @ngdoc function
 * @name markAngularApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the contact page.
 */
 angular.module('markAngularApp')
 .controller('ContactCtrl',['navService','$scope','$http','$httpParamSerializer', function (navService,$scope,$http,$httpParamSerializer) {
 	
 	//set the nav service to show the navigation bar
 	navService.set(true);
 	
 	$scope.sendMail = function(email) {

		//making sure the input is alright, not every browser uses HTML 5 forms!
 		if(email === undefined || email.name === undefined || email.email === undefined || email.subject === undefined || email.comment === undefined)
 		{
 			$scope.emailInvalid = true;
 			$scope.emailSuccess = false;
 			$scope.emailFail = false;
 			return;
 		}

 		//email password removed for security purposes
 		email.pass = "removed";

 		//send the mail to my backend PHP script that handles the mail
 		$http({
 			method: 'POST',
 			url: 'http://mail.mjberube.com',
 			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
 			data: $httpParamSerializer(email)
 		}).then(function successCallback(response) {
 			$scope.emailSuccess = true;
 			$scope.emailFail = false;
 			$scope.emailInvalid = false;
		}, function errorCallback(response) {
 			$scope.emailFail = true;
 			$scope.emailSuccess = false;
 			$scope.emailInvalid = false;
		});
 	};

 }]);
