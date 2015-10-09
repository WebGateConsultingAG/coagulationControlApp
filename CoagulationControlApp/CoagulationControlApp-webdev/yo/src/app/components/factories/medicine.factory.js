(function() {
	  'use strict';

	  angular
	      .module('coagulationControlAppWebdev')
	      .factory('medicine', MedFactory);

	  /** @ngInject */
	  function MedFactory($resource) {
		  
	    var defaultValues = {
				type : "medi",
		};
		
		var methods = {
				save: {	
					method: 'POST',
					params: { 
						action : 'save'}
				},
				query: {
					isArray: false
				}
		};
		
		return $resource('/coag/api/coag', defaultValues, methods); 
	  }

	})();