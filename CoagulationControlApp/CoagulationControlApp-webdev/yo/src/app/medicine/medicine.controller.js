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
		self.editableMedi = -1;
        self.isEditableMedi = function(index) {
			return index === self.editableMedi;
		};

		self.notificationOptionTime = "";
		self.notificationOptionDate = "";
		self.mediDate = "";
		self.msgLocked = null;
		var currentMedi = null;
		self.deleteSure = true;
        
		self.options = [ {
			name : 'mon',
			value : "Monday"
		}, {
			name : 'thu',
			value : "Tuesday"
		}, {
			name : 'wen',
			value : "Wednesday"
		}, {
			name : 'thu',
			value : "Thursday"
		}, {
			name : 'fri',
			value : "Friday"
		}, {
			name : 'sat',
			value : "Saturday"
		}, {
			name : 'sun',
			value : "Sunday"
		}, {
			name : 'all',
			value : "Every day"
		}, {
			name : 'tdy',
			value : "Only today at"
		}, {
			name : 'oly',
			value : "Only on:"
		}, {
			name : 'non',
			value : "No notifications:"
		} ];
		self.defaultOption = self.options[10];
        
        
        
        
        
        
         self.resolveNotification = function(name){
              var result;
             
             for(var idx = 0; idx < self.options.length; idx++){
                 var val = self.options[idx];
                 if(val.name === name){
                     result = val.value;
                     break;
                 }
             }
             /*
             dasselbe wie for-loop aber nicht unterbrechbar
             
             self.options.forEach(function(val){
                 if(val.name === name){
                     result = val.value;
                 }                                       
             });
             */
             return result;
         };
        
        
        
        
        
        
        

		// beispiel für update
		self.updateMedicine = function(mediData, idx) {

			if (mediData.medivalue !== "" && mediData.medivalue != null
					&& mediData.mediname !== "" && mediData.mediname != null) {
				medicine.update(mediData, function(promise) {
					console.log("update success");
					console.log(promise);
				}, function(error) {
					console.log(error);
				}, function() {
					console.log("error");
				});
				self.lockMedi(idx);
			} else {
				// kann nicht updaten, felder sind leer
				alert("Some fields are empty!");
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
				self.editableMedi = -1;
			} else {

			}
		};
        
        
        
        		self.editMedi = function(index) {
			if (self.editableMedi == -1) {
				self.editableMedi = index;
			} else {
				// ein anderes medikament wird gerade bearbeitet, nicht
				// umschalten
				alert("da ist schon ein medi in bearbeitung");
			}
		};

		self.lockMedi = function(index) {
			if (index === self.editableMedi) {
				self.editableMedi = -1;
			} else {
				// ein anderes medikament wird gerade bearbeitet, nicht
				// umschalten
				alert("da ist schon ein medi in bearbeitung");
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
