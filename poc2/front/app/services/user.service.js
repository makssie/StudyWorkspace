(function(){
	'use strict';

	angular.module('AngularApp')
		   .service('UserService', UserService);

	UserService.$inject = [
		'CONFIG',
		'$q',
		'$rootScope',
		'$http'
	];

	function UserService(
		CONFIG,
		$q,
		$rootScope,
		$http
	){

		var _url = CONFIG.WsURL + 'users/v1';

		//expoe method	
		return {
			getUsers : getUsers/*,
			postUser: postUser*/

			//expor post...put...
		};

		//getall
		function getUsers(){

			var deferred = $q.defer(); //$q gerencia as promises
			
			$http({
				method: 'GET',
				url: _url + '/'
			}).then(function(data){
				if (data) {
					deferred.resolve(data);
				} else {
					deferred.reject(data.errors);
				}
			}, function(data){
				deferred.reject(data.errors);
			});
			
			return deferred.promise;

		}

		//post...
		/*function postUsers(){

			var deferred = $q.defer(); //$q gerencia as promises
			
			$http({
				method: 'POST',
				url: _url + '/'
			}).then(function(data){
				if (data) {
					deferred.resolve(data);
				} else {
					deferred.reject(data.errors);
				}
			}, function(data){
				deferred.reject(data.errors);
			});
			
			return deferred.promise;

		}*/

		//put...

		//delete...

	}

})(); //() -> function auto-executável