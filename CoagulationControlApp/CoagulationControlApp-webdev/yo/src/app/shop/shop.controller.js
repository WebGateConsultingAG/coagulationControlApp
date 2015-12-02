(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('ShopController', ShopController);

  /** @ngInject */
  function ShopController(item, order){
      
var self = this;
      self.itemList =[];  
      self.orderList =[];  
      self.itemQuantity = 0;
      self.itemPrice ="";
      self.orderPrice ="";
      self.orderNr ="";
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
               item.query({}, function(allitems) {
				console.dir(allitems);
				if (allitems.itementries !== void 0) {
					self.itemList = allitems.itementries;
				}
			}, function(err) {
				console.log(err);
			});

		};
      
      
      
         self.getOrders = function() {
               item.query({}, function(allorders) {
				console.dir(allorders);
				if (allorders.orderentries !== void 0) {
					self.orderList = allorders.orderentries;
				}
			}, function(err) {
				console.log(err);
			});

		};
      
      
      
        self.getOrders();
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
              console.dir("Order abschicken?");
              self.myOrder = {
                    order: "One shot kill",
					creationDate: new Date(),
                    userid: this.userId,
                    quantity: this.itemList.length,
                    address: "123 sunrise Street",
                    status : "In prozess",
                    orderDate: new Date() ,
                    priceall: this.orderPrice, 
					};
              
				order.save(self.myOrder, function(promise) {
                     self.myOrder.unid = promise.unid;
   					console.log(promise);
        				}, function() {
					console.log("EROR");
				});
              self.ordered = false;
          console.dir(self.myOrder);		
      };
      
      
      self.buyOrder = function(){
          self.myOrder.status = "Done";
                   order.update(self.myOrder, function(promise){  
                }, function(error) {
					console.log(error);
				}, function() {
					console.log("error");
				});
                 self.itemList =[];            
                   alert("Thank you!"); 
                   console.log(self.myOrder);
      };
      
      	self.getOne = function() {
			order.get({
				status : 'In prozess'
			}, function(orderResult) {
				console.dir(orderResult);
			});

		};
      
          
	 }
})();