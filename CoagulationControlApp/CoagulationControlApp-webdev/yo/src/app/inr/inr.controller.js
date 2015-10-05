
(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('InrController', InrController);

  /** @ngInject */
  function InrController(inr) {
	  
		this.inr = null;
		this.inrDate = new Date();
		this.inrOutcome = null;
		this.inrOutcomeClass = "";
		this.inrList = [];
		
		var currentInr = null;
	  
		this.getOne = function(){
			// valid id: 68bf1a87-6a6b-49bf-812c-3560a9fb1079
			inr.get({unid: '68bf1a87-6a6b-49bf-812c-3560a9fb1079'},
					function(inrResult){
						console.dir(inrResult);
					});
		};

		this.saveInr = function() {
			if (this.inr <= 0 || this.inr > 6 || this.inr === null || this.inr === void 0) {
				this.inrOutcome = "Not possible";
				this.inrOutcomeClass = "noright";
				this.inr = 0;
				return;
			} else if (this.inr >= 4) {
				this.inrOutcome = "to high";
				this.inrOutcomeClass = "danger";
			} else {
				this.inrOutcome = "Everything allright";
				this.inrOutcomeClass = "nodanger";
			}
			
			currentInr = {
				inrvalue : this.inr,
				measuredate : this.inrDate,
				creationdate : new Date(),
				username : "The Stan"
			};
			
			var _that = this;
			
			inr.save( currentInr , function(promise){
				currentInr.unid = promise.unid;
				_that.inrList.push(currentInr);
			});
		};

		this.showLast = function() {

		};
	}
}
)();
