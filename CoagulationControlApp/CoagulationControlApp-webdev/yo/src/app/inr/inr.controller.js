
(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('InrController', InrController);

  /** @ngInject */
  function InrController(inr, $scope) {
	  
	  	var self = this;
	  	self.inr = null;
		self.inrDate = new Date();
		self.inrOutcome = null;
		self.inrOutcomeClass = "";
      
      	self.searchOutcome = false;
      
		self.searchOutcomeClass = "glyphicon glyphicon-eye-open";
		self.inrList = [];
		
		var currentInr = null;
	  
		self.getOne = function(){
			// valid id: 68bf1a87-6a6b-49bf-812c-3560a9fb1079
			inr.get({unid: '68bf1a87-6a6b-49bf-812c-3560a9fb1079'},
					function(inrResult){
						console.dir(inrResult);
					});
		};
		
		self.getMany = function(){
			console.log("getting many...");
			inr.query({inrvalue: 4.1}, function(inrs){
				console.dir(inrs);
			},function(err){console.log(err)});
			
		};

		self.saveInr = function() {
			if (self.inr <= 0 || self.inr > 6 || self.inr === null || self.inr === void 0) {
				self.inrOutcome = "";
				self.inrOutcomeClass = "glyphicon glyphicon-remove-sign";
				self.inr = 0;
				return;
			} else if (self.inr >= 4) {
				self.inrOutcome = "";
				self.inrOutcomeClass = "glyphicon glyphicon-info-sign";
			} else {
				self.inrOutcome = "";
				self.inrOutcomeClass = "glyphicon glyphicon-ok-sign";
			}
			
			currentInr = {
				inrvalue : self.inr,
				measuredate : self.inrDate,
				creationdate : new Date(),
				username : "The Stan"
								
			};
			
			
			inr.save( currentInr , function(promise){
				currentInr.unid = promise.unid;
				self.inrList.push(currentInr);
				$scope.$broadcast('newInr', currentInr);
			}, function(error){
			}, function(error){
				console.log("error");
			});
		};


      
      self.searchShow =function() {

          if( self.searchOutcome ){
            self.searchOutcomeClass ="glyphicon glyphicon-eye-open";
          } else{
              self.searchOutcomeClass ="glyphicon glyphicon-eye-close";
          };
          self.searchOutcome = !self.searchOutcome;
        
      }
      
     
      
		
	}
}
)();
