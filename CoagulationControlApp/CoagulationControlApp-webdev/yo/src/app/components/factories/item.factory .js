(function() {
	  'use strict';

	  angular
	      .module('coagulationControlAppWebdev')
	      .factory('item', ItemFactory);

	  /** @ngInject */
	 	function ItemFactory($resource) {

		var defaultValues = {
			type : "item",
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






