(function() {
	  'use strict';

	  angular
	      .module('coagulationControlAppWebdev')
	      .factory('order', OrderFactory);

	  /** @ngInject */
	 	function OrderFactory($resource) {

		var defaultValues = {
			type : "order",
		};

		var removeProperties = {
			method : 'POST',
			params : {
				action : 'delete'
			}
		};

		var methods = {
			save : {
				method : 'POST'
			},
			query : {
				isArray : false
			},
			remove : removeProperties,
			'delete' : removeProperties,
			update : {
				method : 'POST',
				params : {
					action : 'update'
				}
			}
		};

		return $resource('/coag/api/coag', defaultValues, methods);
	}

	})();






