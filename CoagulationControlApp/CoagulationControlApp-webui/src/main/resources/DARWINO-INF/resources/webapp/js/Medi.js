angular.module('coag',$http [])

.controller('mediCtrl', function($scope, ) {
	$scope.allMedis = [];
	$scope.mediName = "";
	$scope.mediMg = "";

	$scope.msgLocked = null;

	$scope.helpme = "";
	$scope.helpBtn = "Help";
	$scope.addMedi = function() {
		if ($scope.mediName !== "" && $scope.mediMg > 0) {
			var medi = {};
			medi.name = $scope.mediName;
			medi.mg = $scope.mediMg;
			$scope.allMedis.push(medi);
			$scope.mediName = "";
			$scope.mediMg = "";
			
			
			$http.post('../api/coag?type=medi&action=save', {
				medivalue : $scope.mediMg,
				mediname : $scope.mediName
				
			}).
				  then(function(response) {
				  alert(response)
			  }, function(response) {
				  alert("Error: "+ Hallo ich bin wieder da)
			  });
			
						};
			};
			
			
			
			

	

	
    
    $scope.removeMedi = function(medi){
    var i = $scope.allMedis.indexOf(medi);
        $scope.allMedis.splice(i, 2);
    };

	$scope.checkTimeInput = function() {
		return $scope.msgLocked !== 'mediTime';
	};

	$scope.checkDateInput = function() {
		return $scope.msgLocked !== 'mediDate';
	};

	$scope.needHelp = function() {

	}

	
});

