(function(){
	'use strict';

	angular.module('AngularApp')
		   
	   .constant('CONFIG', {
	   		WsURL : 'http://localhost:9002/',	   		
	   		culture : 'pt-br'
	   })
	   
	   .constant('ERROR_MESSAGES', {
	   		'pt-br' : {
		   		
			}
	   })

	;

})()