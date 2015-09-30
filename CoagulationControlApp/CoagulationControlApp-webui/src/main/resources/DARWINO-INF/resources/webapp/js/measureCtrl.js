angular.module('coag', [ 'ngResource' ])

.factory('Inr', [ '$resource', function($resource) {
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
	
} ])

.controller('measureCtrl',
		[ '$scope', 'Inr', function($scope, Inr) {
			
			$scope.getOne = function(){
				// valid id: 68bf1a87-6a6b-49bf-812c-3560a9fb1079
				Inr.get({unid: '68bf1a87-6a6b-49bf-812c-3560a9fb1079'},
						function(inrResult){
							console.dir(inrResult);
						})	
			}
			
			
			$scope.inr = null;
			$scope.inrDate = new Date();

			$scope.inrOutcome = null;
			$scope.inrOutcomeClass = "";
			
			$scope.inrList = [];
			
			var currentInr = null;

			$scope.saveInr = function() {
				if ($scope.inr <= 0 || $scope.inr > 6 || $scope.inr == null) {
					$scope.inrOutcome = "Not possible";
					$scope.inrOutcomeClass = "noright";
					return;
				} else if ($scope.inr >= 4) {
					$scope.inrOutcome = "to high";
					$scope.inrOutcomeClass = "danger";
				} else {
					$scope.inrOutcome = "Everything allright";
					$scope.inrOutcomeClass = "nodanger";
				}
				
				currentInr = {
					inrvalue : $scope.inr,
					measuredate : $scope.inrDate,
					creationdate : new Date(),
					username : "The Stan"
				};
				
				
				Inr.save( currentInr , function(promise){
					currentInr.unid = promise.unid;
					$scope.inrList.push(currentInr);
				});
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
