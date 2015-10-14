(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('MedicineController', MedController);

  /** @ngInject */
  function MedController(medicine) {
	  
		this.getOne = function(){
		// valid id: 9194b8aa-2cb1-4bf4-9733-5060b154f7bb
			medicine.get({unid: '9194b8aa-2cb1-4bf4-9733-5060b154f7bb'},
				function(mediResult){
					console.dir(mediResult);
				})
			
		};
		
		this.getMany = function(){
			console.log("getting many...");
			medicine.query({mediname: 2}, function(meds){
				console.dir(meds);
			},function(err){console.log(err)})
			
		};
		
		this.allMedis = [];
		this.mediName = "";
		this.mediMg = "";
		this.msgLocked = null;
		this.helpme = "";
		this.helpBtn = "Help";
		var currentMedi = null;
      this.displayMedis = 10;
		
		
		this.addMedi = function() {
			if (this.mediName !== "" && this.mediMg > 0) {
				currentMedi = {
					medivalue : this.mediMg,
					mediname : this.mediName,
					notificationdate : new Date(),
				};
				
				this.mediName = "";
				this.mediMg = "";
				
				var _that = this;
				
				medicine.save( currentMedi , function(promise){
					currentMedi.unid = promise.unid;
					_that.allMedis.push(currentMedi);
				}, function(){console.log("EROR")});
			}
		};
				
		this.removeMedi = function(idx){
			this.allMedis.splice(idx, 1);
		};

      this.showdati = function() {
  };

		this.needHelp = function() {

		};

          
          
	}
  })();
