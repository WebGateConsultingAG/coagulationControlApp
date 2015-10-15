angular.module('coagulationControlAppWebdev').directive('naviBar',function(){
      'use strict';
	return{
		restrict: 'A',
		scope:{
		navigation: '='
		},
	    templateUrl: 'app/components/navbar/navbar.html'
	};
});
