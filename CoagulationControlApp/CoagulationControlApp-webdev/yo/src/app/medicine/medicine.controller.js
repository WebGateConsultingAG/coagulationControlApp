(function() {
	'use strict';

	angular.module('coagulationControlAppWebdev').controller(
			'MedicineController', MedController);

	/** @ngInject */
	function MedController(medicine) {
		
		
		var self = this;
		
		self.mediList = [];
		self.allMedis = [];
		
		self.mediName = "";
		self.mediMg = "";
		
		self.msgLocked = null;
		
		self.needHelp = false;
		self.helpme = "";
		self.helpBtn = "Help";
		
		var currentMedi = null;
		
		self.medDelete = function(unid, idx){
			medicine.remove(
				{'unid':unid},
				function(){
					self.removeMedi(idx);
				}, function(error){
					console.dir(error);
				},function(error){
					console.dir(error);
				}
			);
		};
		
		
		//beispiel für update
	  	self.updateMedicine = function(mediData){
			// unid wird durch object mitgegeben
	  		medicine.update( mediData , function(promise){
				console.log("after update test");
				console.log(promise);
			}, function(error){
				console.log(error);
			}, function(){
				console.log("error");
				console.log("TestMedi");
				
			});
	  		
	  		
	  	};
		
		
		
	  	self.getOne = function() {
			// valid id: 9194b8aa-2cb1-4bf4-9733-5060b154f7bb
			medicine.get({
				unid : '9194b8aa-2cb1-4bf4-9733-5060b154f7bb'
			}, function(mediResult) {
				console.dir(mediResult);
			});

		};

		


		self.addMedi = function() {
			if (this.mediName !== "" && this.mediMg > 0) {
				currentMedi = {
					medivalue : this.mediMg,
					mediname : this.mediName,
					notificationdate : new Date(),
				};

				this.mediName = "";
				this.mediMg = "";

				var _that = this;

				medicine.save(currentMedi, function(promise) {
					currentMedi.unid = promise.unid;
					_that.allMedis.push(currentMedi);
				}, function() {
					console.log("EROR");
				});
			}
		};

		self.removeMedi = function(idx) {
			this.allMedis.splice(idx, 1);
		};

		self.showdati = function() {
		};

		self.getMany = function() {
			console.log("getting many...");
			medicine.query({}, function(meds) {
				console.dir(meds);
				self.allMedis = meds.medientries;
			}, function(err) {
				console.log(err);
			});

		};
		
		self.getMany();
		
		
	}
})();
