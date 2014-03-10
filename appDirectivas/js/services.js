'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.value('version', '0.1')

	.factory('config', function(){
		var 
			user = {
				name : 'Manu',
				surname : 'de Frutos'
			},
			animals = [
				{
					name : 'Nana',
					type : 'dog',
					breed : 'Dalmatian',
					sex : 'female'
				},
				{
					name : 'Duna',
					type : 'dog',
					breed : 'Rottweiller',
					sex : 'female'
				},
				{
					name : 'Isidoro',
					type : 'cat',
					breed : 'Siames',
					sex : 'male'
				}
			]

		return {
			user : user,
			animals : animals
		}
	});
