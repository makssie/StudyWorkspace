(function(){
	'use strict';

	angular.module('AngularApp').config(Config);

	Config.$inject = [
		'$urlRouterProvider',
		'$stateProvider'
	];
	
	function Config(
		$urlRouterProvider,
		$stateProvider
	){
		console.log('## CONFIG');

		$urlRouterProvider.otherwise("/");

		$stateProvider

		    .state('home', {
				url : '/',
				controller : 'UserController',
				controllerAs : 'vm',
				templateUrl : '/index.html'
			})
		;
	}

})();