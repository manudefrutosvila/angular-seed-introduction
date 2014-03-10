'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.factory('shareData',function(){
		return {
			list : {},
			selected : null
		}
	})
	.controller('ListCtrl', function($scope, config, shareData) {
		$scope.welcome = "Bienvenido, ";
		$scope.greet = "Hi!";
		

		$scope.user = config.user;
		
		$scope.animals = config.animals;
		shareData.list = $scope.animals;

		$scope.animal = null;
		shareData.selected = $scope.animal;
		
		$scope.animalCopy = null;
		$scope.editorEnabled = false;


		$scope.saludar = function(){
			alert($scope.greet);
		}

		$scope.showAnimal = function(){
			$scope.editorEnabled = true;
			$scope.animal = this.animal;
			$scope.animalCopy = angular.copy(this.animal);
		}

		$scope.detailIsShown = function(){
			return $scope.editorEnabled; //&& !$scope.confirmEnabled
		}

		$scope.listIsShown = function(){
			return !$scope.editorEnabled; //&& !$scope.confirmEnabled
		}

		

		

	})

	.controller('MyCtrl2', function($scope, shareData) {
		$scope.list = shareData.list;
		$scope.selected = shareData.selected;
	})

	.controller('NestedController', function($scope){
		$scope.seeyou = "Hasta la vista, ";
	})

	.controller('DetailCtrl', function($scope){
		$scope.confirmEnabled = false;
		$scope.confirmQuestion = "If you continue you will lose the data. Do you want to discard the changes?";

		$scope.confirmIsShown = function(){
			return $scope.confirmEnabled;
		}

		$scope.back = function(){
			//ask to save data
			$scope.confirmEnabled = true;
		}

		$scope.save = function(){
			//save the animal local var
			angular.extend($scope.animal, $scope.animalCopy);

			console.log("Animal: "+ $scope.animal.breed);
			console.log("Animal Copy: "+ $scope.animalCopy.breed);

			$scope.animalCopy = null;
			//$scope.animal = null;
			$scope.confirmEnabled = false;
			$scope.editorEnabled = false;
		}

		$scope.cancel = function(){
			//this.animal = $scope.animal;

			$scope.animalCopy = null;
			$scope.confirmEnabled = false;
			$scope.editorEnabled = false;
		}
		
	})

	.directive('myDetail', function() {
		return {
			templateUrl: 'partials/detailView.html',
			controller: 'DetailCtrl',
			//template: 'hola {{user.name}} '
		};
	});