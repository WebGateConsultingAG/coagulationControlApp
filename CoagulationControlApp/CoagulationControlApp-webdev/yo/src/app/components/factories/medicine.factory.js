(function() {
	'use strict';

	angular
    .module('coagulationControlAppWebdev')
    .factory('medicine',
			MedFactory);

	/** @ngInject */
	function MedFactory($resource) {

		var defaultValues = {
			type : "medi",
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
				isArray : false,
				transformResponse : [angular.fromJson, function(data){
					data.medientries = data.medientries.map(function(val){
						val.notificationtime = new Date(val.notificationtime);
						return val;
					});
					return data;
				}]
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