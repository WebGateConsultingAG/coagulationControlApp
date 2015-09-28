angular.module('coag',['ngResource'])
.factory('Reg', [ '$resource', function($resource) {
	var defaultValues = {
			type : "user",
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

    .controller('regCtrl', ['$scope', 'Reg', function($scope, Reg){
    	
    	$scope.getOne = function(){
    		// valid id: 4cedf550-50ca-478a-99f8-623d2a9523d0
    		Reg.get({unid: 'd2d1f534-f174-4c5a-9a52-01291e7f2dab'},
    				function(result){
    					console.dir(result);
    				})	
    	}
    	
    	
    	
        $scope.name = "";
        $scope.surname = "";
        $scope.bday = null;
        $scope.sex = true;
        
        $scope.norm = {
            min : 0,
            max : 6
        };
        
       $scope.msgGreeting = null;
       $scope.nickname = null;
       
       var currentUser = null;
          
          
       $scope.saveUser = function(){
    	   
        	currentUser = {
        		gender: 	!!$scope.sex,
				birthDate : $scope.bday,
				welcomemsg: +$scope.msgGreeting,
				firstName: 	$scope.name,
				lastName: 	$scope.surname,
				nickname:	($scope.nickname !== null && $scope.msgGreeting === "3") ? $scope.nickname : "",
        	};
        	
        	   Reg.save( currentUser , function(promise){
        		  currentUser.unid = promise.unid;
        		  console.dir(promise);
			}); 
            
            
        };
        $scope.checkNicknameInput = function(){
          return $scope.msgGreeting !== 'nickname';  
            
        };
        
  
       
    }]);;
   

