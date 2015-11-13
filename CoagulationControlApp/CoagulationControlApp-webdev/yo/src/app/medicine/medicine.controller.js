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
		self.editSave = false;
		self.notificationOptionTime = "";
		self.notificationOptionDate = "";
		self.mediDate = "";
		self.msgLocked = null;
		var currentMedi = null;
		self.deleteSure = true;
		self.options = [
		{name:'mon', value : "Monday"},
		{name:'thu', value : "Tuesday"},
		{name:'wen', value : "Wendesday"}, 
		{name:'thu', value: "Thursday"}, 
		{name:'fri', value: "Friday"}, 
		{name:'sat', value: "Saturday"}, 
		{name:'sun', value : "Sunday"}, 
		{name:'all',value : "Every day"}, 
		{name:'tdy',value : "Only today at"}, 
		{name:'oth',value : "Only on:"},
		{name:'non', value : "No notifications:"}
		];
		self.defaultOption = self.options[10]; 

		// beispiel für update
		self.updateMedicine = function(mediData) {
if(mediData != ""){
				medicine.update(mediData, function(promise) {
					console.log("update success");
					console.log(promise);
				}, function(error) {
					console.log(error);
				}, function() {
					console.log("error");

				});
}else{
	alert("")
}
			};


		self.medDelete = function(unid, idx) {
            var r = confirm("Do you really want to delete this entry?");
if (r == true) {
			medicine.remove({
				'unid' : unid
			}, function() {
				// löschen erfolgreich, aus anzeige löschen
				self.allMedis.splice(idx, 1);
			}, function(error) {
				// error handler 1
				console.dir(error);
			}, function(error) {
				// error handler 2
				console.dir(error);
			}

			);
		}
else {
    
}
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
					notificationday : this.notificationOptionDate,
					notificationtype : this.defaultOption.name,
					notificationdate : new Date()
				};
				this.mediName = "";
				this.mediMg = "";
				this.defaultOption = this.options[10];
				var _that = this;
				medicine.save(currentMedi, function(promise) {
					currentMedi.unid = promise.unid;
					_that.allMedis.push(currentMedi);
				}, function() {
					console.log("EROR");
				});
			}
		
		};

		self.getMany = function() {
			medicine.query({}, function(meds) {
				console.dir(meds);
				if (meds.medientries !== void 0) {
					self.allMedis = meds.medientries;
				}
			}, function(err) {
				console.log(err);
			});

		};

		self.getMany();

		
	
		
		
		
	}
})();
