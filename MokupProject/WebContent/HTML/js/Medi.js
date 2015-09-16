
angular.module('coag',[])
    
.controller('mediCtrl', function($scope){
   $scope.allMedis = [];
    $scope.mediName = "";
    $scope.mediMg = "";
    
      $scope.msgLocked =null;
    
  $scope.helpme = "";
    $scope.helpBtn = "Help";
    $scope.addMedi = function(){
        if($scope.mediName !== "" && $scope.mediMg > 0){
            var medi = {};
                medi.name = $scope.mediName;
                medi.mg = $scope.mediMg;
                $scope.allMedis.push(medi);
                $scope.mediName = "";
                $scope.mediMg = "";
        }
    };

  
    
    
    
    $scope.checkTimeInput = function(){
          return $scope.msgLocked !== 'mediTime';  
        };
    
        $scope.checkDateInput = function(){
          return $scope.msgLocked !== 'mediDate';         };
    
    $scope.needHelp = function(){
    
    }
    

    
    
});;