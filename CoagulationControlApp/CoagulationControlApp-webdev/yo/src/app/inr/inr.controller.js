
(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('InrController', InrController);

  /** @ngInject */
  function InrController(inr) {
	  
	  	var self = this;
	  
		self.inr = null;
		self.inrDate = new Date();
		self.inrOutcome = null;
		self.inrOutcomeClass = "";
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
				self.inrOutcome = "Not possible";
				self.inrOutcomeClass = "noright";
				self.inr = 0;
				return;
			} else if (self.inr >= 4) {
				self.inrOutcome = "to high";
				self.inrOutcomeClass = "danger";
			} else {
				self.inrOutcome = "Everything allright";
				self.inrOutcomeClass = "nodanger";
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
			}, function(error){
				console.log("error");
			});
			
		};

		self.showLast = function() {

		};
	}
}
)();
