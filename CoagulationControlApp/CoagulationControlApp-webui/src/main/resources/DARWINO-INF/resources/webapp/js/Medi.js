angular.module('coag',  ['ngResource'])

.factory('Medi', [ '$resource', function($resource) {
	var defaultValues = {
			type : "medi",
	};
	
	var methods = {
			save: {	
				method: 'POST',
				params: { 
					action : 'save'}
			}
	};
	return $resource('/coag/api/coag', defaultValues, methods); 
	
} ])

.controller('mediCtrl', ['$scope','Medi',function($scope, Medi) {
	
	
	$scope.getOne = function(){
		// valid id: 9194b8aa-2cb1-4bf4-9733-5060b154f7bb
		Medi.get({unid: '9194b8aa-2cb1-4bf4-9733-5060b154f7bb'},
				function(mediResult){
					console.dir(mediResult);
				})	
	}
	
	$scope.allMedis = [];
	$scope.mediName = "";
	$scope.mediMg = "";

	$scope.msgLocked = null;

	$scope.helpme = "";
	$scope.helpBtn = "Help";
	
	var currentMedi = null;
	
	
	$scope.addMedi = function() {
		if ($scope.mediName !== "" && $scope.mediMg > 0) {
			
			currentMedi = {
				medivalue : $scope.mediMg,
				mediname : $scope.mediName,
				notificationdate : new Date()
			};
			
			$scope.mediName = "";
			$scope.mediMg = "";
			
			Medi.save( currentMedi , function(promise){
				currentMedi.unid = promise.unid;
				console.dir($scope.allMedis);
			});
		};
	};
			
    $scope.removeMedi = function(idx){
        $scope.allMedis.splice(idx, 1);
    };

	$scope.checkTimeInput = function() {
		return $scope.msgLocked !== 'mediTime';
	};

	$scope.checkDateInput = function() {
		return $scope.msgLocked !== 'mediDate';
	};

	$scope.needHelp = function() {

	}

	
}]);

