(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('ShopController', ShopController);

  /** @ngInject */
  function ShopController(shop){
      
var self = this;
      self.orderList =[];           //Besteht aus mehrere Listen
      self.orderListFE =[];         //Temporäre Liste wird nach dem absenden geleert
      self.orderQuantity = 0;
      self.price ="";
      self.orderNr ="";
     
self.orders = [ {
			name : '1st',
			value : "Order nr. 1",
            price : "20"
		}, {
			name : '2nd',
			value : "Order nr. 2",
            price : "25"
		}, {
		name : '3rd',
			value : "Order nr. 3",
            price : "120"
		}, {
		name : '4th',
			value : "Order nr. 4",
            price : "5",
            
		} ];
		self.defaultOrder = self.orders[0];
      self.editOrder = self.orders[0];

      

		self.newOrder = function() {
			           
             var myOrder = null;
         				myOrder = {
					quantity : this.orderQuantity,
					order : this.defaultOrder.name,
					orderDate : new Date(),
					};
				self.orderQuantity = 0;
             self.editOrder = self.orders[0];
             var _that = this;
				shop.save(myOrder, function(promise) {
                    shop.unid = promise.unid;
                   _that.orderList.push(myOrder);
                    _that.orderListFE.push(myOrder);                    
					console.log(promise);
        				}, function() {
					console.log("EROR");
				});
			};
      
      
      self.getOrder = function() {
			shop.query({}, function(allOrders) {
				console.dir(allOrders);
				if (allOrders.shopentries !== void 0) {
					self.orderList = allOrders.shopentries;
				}
			}, function(err) {
				console.log(err);
			});

		};
      
      self.getOrder();
       
     
      
      
	 }
})();