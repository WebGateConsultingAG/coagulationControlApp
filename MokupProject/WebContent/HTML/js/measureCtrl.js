angular.module('coag',['ngResource'])
    .factory('Inr', ['$resource', function($resource) {
        return $resource('/inr/:id', null,{});
    }])
    .controller('measureCtrl', ['$scope', 'Inr', function($scope, Inr){
        $scope.inr = null;
        $scope.inrDate = new Date();
        
        $scope.inrOutcome = null;
        $scope.inrOutcomeClass = "";
        
        $scope.saveInr = function(){
           
            if($scope.inr <= 0 || $scope.inr > 6 || $scope.inr == null)  {
                $scope.inrOutcome = "Ungültige Angabe";
                $scope.inrOutcomeClass = "noright";
            }
            else if ( $scope.inr >= 4 ) {
                $scope.inrOutcome = "Nicht in Ordnung";
                $scope.inrOutcomeClass = "danger";
            }
            else {
                $scope.inrOutcome = "In Ordnung";
                $scope.inrOutcomeClass = "nodanger";   
            }
            
            Inr.save({
                inr: $scope.inr,
                date: $scope.inrDate,
                id: 12
            })
        };
        
         $scope.lastButn1 = "Letze INR";

        $scope.lastTextClass = "";
          $scope.showLast = function(){
     
      
        }
        
        
    }]);