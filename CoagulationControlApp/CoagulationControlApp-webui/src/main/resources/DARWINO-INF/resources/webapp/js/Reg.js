angular.module('coag',['ngResource'])
    .factory('Reg', ['$resource', function($resource) {
        return $resource('/inr/:id', null,{});
    }])
    .controller('regCtrl', ['$scope', 'Reg', function($scope, Reg){
        $scope.name = "";
        $scope.surname = "";
        $scope.age = "";
        $scope.sex = true;
        $scope.norm = {
            min : 0,
            max : 6
        };
        
       $scope.msgGreeting = null;
          
        $scope.regist = function(){
                       
            Reg.save({
                Name: $scope.regNameme,
                Surname: $scope.regSurname,
                id: 13
            })
        };
        $scope.checkNicknameInput = function(){
          return $scope.msgGreeting !== 'nickname';  
            
        };
        
  
       
    }]);;
   

