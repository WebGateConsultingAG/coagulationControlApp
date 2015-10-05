
(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('ChartController', ChartController);

  /** @ngInject */
  function ChartController() {
	  
	  //hole INR
	  var testInrs = [	{date: new Date(), value: 12},
						{date: new Date(new Date().setDate(4)), value: 9},
						{date: new Date(new Date().setDate(2)), value: 3}]
	  
	  this.labels = testInrs.map(function(val){
		  return dateFormatter(val.date);
		});
	  this.series = ['INR value'];
	  this.data = [
		testInrs.map(function(val){return val.value})
	  ];
	  this.onClick = function (points, evt) {
		console.log(points, evt);
	  };
	  
	}
	
	function dateFormatter(d){
		var day = d.getDate();
		var monthIndex = d.getMonth();
		var year = d.getFullYear();
		return  day + "." + monthIndex + "." + year;
	}
}
)();
