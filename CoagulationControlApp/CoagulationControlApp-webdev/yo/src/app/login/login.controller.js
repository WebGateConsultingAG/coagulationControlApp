
(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function loginController(login, $scope) {

      $scope.username = "";
      $scope.userLoginName ="";
      $scope.passwort ="";
      $scope.passwortLogin ="";
      
$scope.user = {
    $scope.username = "Admin"
  }

       $scope.userlogin = {
        text: '',
        word: /^\s*\w*\s*$/
      };
   

  $scope.userserver = user;
  $scope.userclient = userlogin;
  $scope.equals = angular.equals(userserver, userclient)
   
  if($scope.equals === true){
  
  }
      else{
          alert("naja, nicht gegangen");
      };
      console.dir(equals);
  }
}
)();
