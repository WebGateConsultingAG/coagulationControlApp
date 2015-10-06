(function() {
  'use strict';

  angular
    .module('coagAngular')
    .controller('MedicineController', MedController);

  /** @ngInject */
  function MedController(medicine) {
	  
		this.getOne = function(){
		// valid id: 9194b8aa-2cb1-4bf4-9733-5060b154f7bb
			medicine.get({unid: '9194b8aa-2cb1-4bf4-9733-5060b154f7bb'},
				function(mediResult){
					console.dir(mediResult);
				})
			
		}
		
		this.allMedis = [];
		this.mediName = "";
		this.mediMg = "";

		this.msgLocked = null;

		this.helpme = "";
		this.helpBtn = "Help";
		
		var currentMedi = null;
		
		
		this.addMedi = function() {
			if (this.mediName !== "" && this.mediMg > 0) {
				currentMedi = {
					medivalue : this.mediMg,
					mediname : this.mediName,
					notificationdate : new Date()
				};
				
				this.mediName = "";
				this.mediMg = "";
				
				medicine.save( currentMedi , function(promise){
					currentMedi.unid = promise.unid;
					this.allMedis.push(currentMedi);
				}, function(){console.log("EROR")});
			};
		};
				
		this.removeMedi = function(idx){
			this.allMedis.splice(idx, 1);
		};

		this.checkTimeInput = function() {
			return this.msgLocked !== 'mediTime';
		};

		this.checkDateInput = function() {
			return this.msgLocked !== 'mediDate';
		};

		this.needHelp = function() {

		}
	}
}
)();