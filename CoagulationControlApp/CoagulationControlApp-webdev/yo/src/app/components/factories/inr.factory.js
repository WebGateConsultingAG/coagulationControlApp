(function() {
  'use strict';

  angular
      .module('coagAngular')
      .factory('inr', inrFactory);

  /** @ngInject */
  function inrFactory($resource) {
	  
    var defaultValues = {
			type : "inr",
	};
	
	var methods = {
			save: {	
				method: 'POST',
				params: { 
					action : 'save'}
			}
	};
	
	return $resource('/coag/api/coag', defaultValues, methods); 
  }

})();