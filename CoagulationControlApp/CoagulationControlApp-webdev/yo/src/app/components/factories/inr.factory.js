(function() {
  'use strict';

  angular
      .module('coagulationControlAppWebdev')
      .factory('inr', inrFactory);

  /** @ngInject */
  function inrFactory($resource) {
	  
    var defaultValues = {
			type : "inr",
	};
    
    var removeProperties = {
			method: 'POST',
			params: {
				action: 'delete'
			}
	};
	
	var methods = {
			save: {	
				method: 'POST'
			},
			query: {
				isArray: false
			},
			remove: removeProperties,
			'delete': removeProperties
	};
	
	return $resource('/coag/api/coag', defaultValues, methods); 
  }

})();