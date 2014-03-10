'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('ListCtrl', function($scope, config, $compile) {
		$scope.welcome = "Bienvenido, ";
		$scope.greet = "Hi!";
		$scope.confirmQuestion = "If you continue you will lose the data. Do you want to discard the changes?";

		$scope.user = config.user;
		
		$scope.animals = config.animals;
		$scope.animal = null;
		$scope.animalCopy = null;
		$scope.editorEnabled = false;
		$scope.confirmEnabled = false;


		$scope.saludar = function(){
			alert($scope.greet);
		}

		$scope.showAnimal = function(){
			$scope.editorEnabled = true;
			$scope.animal = this.animal;
			$scope.animalCopy = angular.copy(this.animal);
		}

		$scope.detailIsShown = function(){
			return $scope.editorEnabled && !$scope.confirmEnabled;
		}

		$scope.listIsShown = function(){
			return !$scope.editorEnabled && !$scope.confirmEnabled;
		}

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

	.controller('MyCtrl2', [function() {

	}])

	.controller('NestedController', function($scope){
		$scope.seeyou = "Hasta la vista, ";
	})

	.controller('DetailCtrl', function($scope){
		//should this be another view-control?

		/*$scope.back = function(){
			//ask to save data
			$scope.animal = null;
			$scope.animalCopy = null;
		}

		$scope.save = function(){
			$scope.animal = $scope.animalCopy;
		}

		$scope.cancel = function(){
			$scope.animal = null;
			$scope.animalCopy = null;
		}*/
	});