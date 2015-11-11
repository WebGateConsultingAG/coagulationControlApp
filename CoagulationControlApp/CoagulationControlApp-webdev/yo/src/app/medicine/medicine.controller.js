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
		self.mediDate = "";
		self.notificationType = "";
		self.notificationDay = "";
		self.msgLocked = null;
		var currentMedi = null;
	   self.deleteSure = true;
		self.notification = {
             repeatSelectType: null,
             repeatSelectWeek: null,
    type: [
      {id: 'no', name: 'None'},
      {id: 'week', name: 'Weekly'},
      {id: 'time', name: 'Only at:'},
      {id: 'date', name: 'Only on:'}
    ],
             day: [
      {id: '1', name: 'Monday'},
      {id: '2', name: 'Tuesday'},
      {id: '3', name: 'Wednesday'},
      {id: '4', name: 'Thursday'},
      {id: '5', name: 'Friday'},
      {id: '6', name: 'Saturday'},
      {id: '7', name: 'Sunday'}
    ],
   };
        
        
        
		
		//beispiel für update
	  	self.updateMedicine = function(mediData){
			// unid wird durch object mitgegeben
	  		medicine.update( mediData , function(promise){
				console.log("update success");
				console.log(promise);
			}, function(error){
				console.log(error);
			}, function(){
				console.log("error");
				
			});
	  	};
		
		self.medDelete = function(unid, idx){ 
            medicine.remove(
				{'unid':unid},function(promise){
                    //löschen erfolgreich, aus anzeige löschen
                    self.allMedis.splice(idx,1);
                    
                },
				 function(error){
                     // error handler 1
					console.dir(error);
				},function(error){
                    //error handler 2
					console.dir(error);
				}
               
			);
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
					notificationdate: new Date(),
					notificationday: this.notificationDay,
					notificationtype: this.notificationType
					
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
			};
			if (this.mediName !== "" || this.mediMg > 0){
				
			}
		};



		self.getMany = function() {
			medicine.query({}, function(meds) {
				console.dir(meds);
                if ( meds.medientries != void 0){
				    self.allMedis = meds.medientries;
                }
			}, function(err) {
				console.log(err);
			});

		};
		
		self.getMany();

	}
})();
