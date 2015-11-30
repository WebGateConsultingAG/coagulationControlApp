(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('ShopController', ShopController);

  /** @ngInject */
  function ShopController(item){
      
var self = this;
      self.itemList =[];           
      self.itemQuantity = 0;
      self.itemPrice ="";
      self.orderNr ="";
     
self.items = [ {
			name : '1st',
			value : "Item nr. 1"
  		}, {
			name : '2nd',
			value : "Item nr. 2"
		}, {
		name : '3rd',
			value : "Item nr. 3"
		}, {
		name : '4th',
			value : "Item nr. 4"
            
		} ];
		self.defaultItem = self.items[0];
      self.editItem = self.items[0];

      

		self.newItem = function() {
			           console.log("Hehey, function geht!");
             var myItem = null;
         				myItem = {
					quantity : this.itemQuantity,
					item : this.editItem.name,
					itemDate : new Date(),
					};
				self.itemQuantity = 0;
             self.editItem = self.items[0];
             var _that = this;
             console.log("Hehey, fast beim save!");
				item.save(myItem, function(promise) {
                   console.log("Hehey, BIN IN SAVE BOOOAH"); 
                   myItem.unid = promise.unid;
                   _that.itemList.push(myItem);
					console.log(promise);
        				}, function() {
					console.log("EROR");
				});
			};
      
      
      self.getItem = function() {
          console.log("Hehey, Hole alles ab");
			item.query({}, function(allitems) {
				console.dir(allitems);
				if (allitems.itementries !== void 0) {
					self.itemList = allitems.itementries;
				}
			}, function(err) {
				console.log(err);
			});

		};
      self.getItem();
      
      self.deleteItem = function(){
      var r = confirm("Do you really want to remove this item?");
			if (r === true) {
				item.remove({
                    'unid' : unid
				}, function() {
					// löschen erfolgreich, aus anzeige löschen
					self.itemList.splice(idx, 1);
				}, function(error) {
					// error handler 1
					console.dir(error);
				}, function(error) {
					// error handler 2
					console.dir(error);
				}

				);
			} else {

			}
		};
       
     
      
      
	 }
})();