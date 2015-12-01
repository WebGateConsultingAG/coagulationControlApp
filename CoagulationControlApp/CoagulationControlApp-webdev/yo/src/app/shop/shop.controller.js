(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('ShopController', ShopController);

  /** @ngInject */
  function ShopController(item, order){
      
var self = this;
      self.itemList =[];           
      self.itemQuantity = 0;
      self.itemPrice ="";
      self.orderPrice ="";
      self.orderNr ="";
      self.ordered = false;
      self.inEdit = false;
      self.myOrder = null;
      self.userId = "1";
      
     
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
             var myItem = null;
         				myItem = {
					quantity : this.itemQuantity,
					item : this.editItem.name,
					itemDate : new Date(),
                    orderId: this.myOrder.unid,
					};
				self.itemQuantity = 0;
             self.editItem = self.items[0];
             var _that = this;
				item.save(myItem, function(promise) {
                   myItem.unid = promise.unid;
                   _that.itemList.push(myItem);
					console.log(promise);
        				}, function() {
					console.log("EROR");
				});
			};
      
      
      self.getItem = function() {
          if(order.get({
				status : "false"
			})){
  			item.query({}, function(allitems, order) {
				console.dir(allitems);
				if (allitems.itementries !== void 0) {
					self.itemList = allitems.itementries;
				}
			}, function(err) {
				console.log(err);
			})
}else{
    
}
		};
      self.getItem();
      
      self.deleteItem = function(unid, idx){
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
				});
			} else {

			}
		};
      
      self.newOrder = function(){
          if(self.ordered === false){
              console.dir("Order abschicken?")
              self.myOrder = {
                    order: "hallo",
					orderDate: new Date(),
					creationDate: new Date(),
                    userid: this.userId,
                    quantity: this.itemList.length,
                    priceall: this.orderPrice,
                    address: "muster",
                    status : this.ordered
					};
              
				order.save(self.myOrder, function(promise) {
                     self.myOrder.unid = promise.unid;
   					console.log(promise);
        				}, function() {
					console.log("EROR");
				});
          }else{
              self.ordered = false;

      }
          console.dir(self.myOrder);		
      };

self.newOrder();
      
      
      self.buyOrder = function(orderData){
          self.ordered = true;
          order.update(orderData, function(promise){        
          }, function(error) {
					console.log(error);
				}, function() {
					console.log("error");
				});
                 self.itemList =[];            
                   alert("Thank you!")             
      };
      
      
          
	 }
})();