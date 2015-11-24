(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('ShopController', ShopController);

  /** @ngInject */
  function ShopController(shop){
      
var self = this;
		self.orderList =[];
      self.orderQuantity = 0;
		self.price ="";
     
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
            price : "5"
		} ];
		self.defaultOrder = self.orders[0];
      self.editOrder = self.orders[0];
      
      
      self.resolvePrice = function(name) {
			var result;

			for (var idx = 0; idx < self.orders.length; idx++) {
				var val = self.orders[idx];
				if (val.name === name) {
					result = val.price;
					break;
				}
			}
			/*
			 * dasselbe wie for-loop aber nicht unterbrechbar
			 * 
			 * self.options.forEach(function(val){ if(val.name === name){ result =
			 * val.value; } });
			 */
			return result;
		};

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
					console.log(promise);
				}, function() {
					console.log("EROR");
				});
			};
      
      
      self.getMany = function() {
			shop.query({}, function(allOrders) {
				console.dir(allOrders);
				if (allOrders.shopentries !== void 0) {
					self.orderList = allOrders.shopentries;
				}
			}, function(err) {
				console.log(err);
			});

		};
      
      self.getMany();
	 }
})();