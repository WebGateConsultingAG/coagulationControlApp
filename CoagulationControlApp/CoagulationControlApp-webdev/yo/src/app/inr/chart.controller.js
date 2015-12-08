(function() {
	'use strict';

	angular.module('coagulationControlAppWebdev').controller('ChartController',
			ChartController);

	/** @ngInject */
	function ChartController(inr, $scope) {
		// hole INR
		var displayInrs = [];
		var allInrs = [];
		var dataDisplayCap = 6;
		$scope.labels = [];
		$scope.data = [];

		$scope.$on('newInr', function(evt, data) {
			console.log("new inr event!");
			console.log(data);
			addValue(data);

		});

		$scope.update = function() {
			inr.query({}, function(inrs) {
				transformData(inrs.inrentries, 0); // geht ins $scope.$on
			}, function(err) {
				console.log(err);
			});
		};

		function addValue(inr) {
			allInrs.unshift(inr);
			transformData(allInrs, 0);
			$scope.showAll = allInrs;
		}

		function transformData(inrArr, layer) {
			if (layer === null) {
				layer = 0;
			}
			allInrs = inrArr;

			displayInrs = inrArr.slice(0, dataDisplayCap).reverse();
			
			$scope.labels = displayInrs.map(function(val) {
				return dateFormatter(new Date(val.measuredate));
			});

			$scope.data[layer] = displayInrs.map(function(val) {
				return val.inrvalue;
			});
		}

		$scope.update();
		$scope.series = [ 'INR value' ];

		// TODO: Delete function if unused!
		$scope.onClick = function(points, evt) {

			console.log(points, evt);
		};

	}

	function dateFormatter(d) {
		var day = d.getDate();
		var monthIndex = d.getMonth();
		var year = d.getFullYear();
		return day + "." + monthIndex + "." + year;
	}
})();
