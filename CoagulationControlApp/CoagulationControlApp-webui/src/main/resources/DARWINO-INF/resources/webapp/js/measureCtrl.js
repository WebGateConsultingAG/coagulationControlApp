angular.module('coag', [ 'ngResource' ]).factory('Inr',
		[ '$resource', function($resource) {
			return $resource('/inr/:id', null, {});
		} ]).controller('measureCtrl',
		[ '$scope', 'Inr', function($scope, Inr) {
			$scope.inr = null;
			$scope.inrDate = new Date();

			$scope.inrOutcome = null;
			$scope.inrOutcomeClass = "";

			$scope.saveInr = function() {

				if ($scope.inr <= 0 || $scope.inr > 6 || $scope.inr == null) {
					$scope.inrOutcome = "Not possible";
					$scope.inrOutcomeClass = "noright";
				} else if ($scope.inr >= 4) {
					$scope.inrOutcome = "to high";
					$scope.inrOutcomeClass = "danger";
				} else {
					$scope.inrOutcome = "Everything allright";
					$scope.inrOutcomeClass = "nodanger";
				}

				Inr.save({
					inr : $scope.inr,
					date : $scope.inrDate,
					id : 12
				})
			};

			$scope.lastButn1 = "Last INR";

			$scope.lastTextClass = "";
			$scope.showLast = function() {

			};

			$(function() {
				$('#container').highcharts({

					title : {
						text : 'Digram of you last month INRs'
					},

					xAxis : {
						tickInterval : 1
					},

					yAxis : {
						type : 'logarithmic',
						minorTickInterval : 0.1
					},

					tooltip : {
						headerFormat : '<b>{series.name}</b><br />',
						pointFormat : 'x = {point.x}, y = {point.y}'
					},

					series : [ {
						data : [ 0.1, 2, 1, 8, 56, 32, 64, 1, 256, 2512 ],
						pointStart : 1
					} ]
				});
			});

		} ]);
