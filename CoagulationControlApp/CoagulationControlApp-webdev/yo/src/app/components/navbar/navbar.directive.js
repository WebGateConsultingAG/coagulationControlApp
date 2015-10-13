angular.module('coagulationControlAppWebdev').directive('naviBar',function(){
	return{
		restrict: 'A',
		scope:{
		navigation: '='
		},
	    templateUrl: 'app/components/navbar/navbar.html'
	};
});
