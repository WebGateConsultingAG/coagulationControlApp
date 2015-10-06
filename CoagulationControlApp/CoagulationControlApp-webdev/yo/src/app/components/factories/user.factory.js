(function() {
  'use strict';

  angular
      .module('coagAngular')
      .factory('user', UserFactory);

  /** @ngInject */
  function UserFactory($resource) {
	  
    var defaultValues = {
			type : "user",
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