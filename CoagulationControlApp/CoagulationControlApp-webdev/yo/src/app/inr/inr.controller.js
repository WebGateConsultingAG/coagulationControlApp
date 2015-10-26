
(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('InrController', InrController);

  /** @ngInject */
  function InrController(inr, $scope) {
	  
	  	var self = this;
	  	
	  	//beispiel für löschen
	  	self.testdelete = function(){
	  		inr.remove(
	  			{unid: '7f2bca97-d044-419b-9b42-8924c2e34718'},
				function(result){
	  				console.dir(result);
	  			}, function(error){
	  				console.log(error);
				}, function(){
					console.log("error");
				}
	  		);
	  		
	  		
	  	};
	  	
	  	//beispiel für update
	  	self.updateOne = function(){
	  		testInr = {
				inrvalue : self.inr,
				measuredate : self.inrDate,
				creationdate : new Date(),
				username : "The Stan"
				//hier unid mitgeben			
			};
			
			// unid wird durch object mitgegeben
			inr.save( testInr , function(promise){
				console.log("after update test");
				console.log(promise);
			}, function(error){
				console.log(error);
			}, function(){
				console.log("error");
			});
	  		
	  		
	  	};
	  	
	  	
	  	
	  	self.inr = null;
		self.inrDate = new Date();
		self.inrOutcome = null;
		self.inrOutcomeClass = "";
		self.inrSearch = "";
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
				username : "The Stan",
			
								
			};
			
			
			inr.save( currentInr , function(promise){
				currentInr.unid = promise.unid;
				$scope.$broadcast('newInr', currentInr);
			}, function(error){
				console.log(error);
			}, function(){
				console.log("error");
			});
		};

		
      
      self.searchShow = function() {
    	  if( self.searchOutcome ){
              self.searchOutcomeClass ="glyphicon glyphicon-eye-open";
            } else{
                self.searchOutcomeClass ="glyphicon glyphicon-eye-close";
            }
            self.searchOutcome = !self.searchOutcome;
            console.log("getting many...");
  			inr.query({inrvalue: self.inrSearch}, function(inrs){ //schickt die funktion ins Chart.controller update();
  				self.inrList = inrs.inrentries;
  			},function(err){console.log(err)});   	  
      };
   
      
      
     
      
		
	}
}
)();
