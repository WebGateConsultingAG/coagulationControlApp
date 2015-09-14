google.load("visualization", "1", {
	packages : [ "corechart" ]
});
google.setOnLoadCallback(drawChart);

function drawChart() {

	var data = google.visualization.arrayToDataTable([
			[ 'Jahr', 'INR Durchschnitt', 'Anzahl messungen über die Norme' ],
			[ 'Juni', 1.3, 70 ], [ 'Juli', 2000, 3120 ],
			[ 'August', 12170, 9920 ], [ 'August', 15170, 9220 ] ]);
	var options = {
		title : 'INR Durchschnitt',
		hAxis : {
			title : 'Messungen'
		},
		vAxis : {
			title : 'INR'
		}
	};

	var chart = new google.visualization.ColumnChart(document
			.getElementById('oil'));
	chart.draw(data, options);
}

var x = document.getElementById("demo");

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
	var latlon = position.coords.latitude + "," + position.coords.longitude;

	var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
			+ latlon + "&zoom=12&size=600x300&sensor=true";
	document.getElementById("mapholder").innerHTML = "<img src='" + img_url
			+ "'>";
}

function showError(error) {
	switch (error.code) {
	case error.PERMISSION_DENIED:
		x.innerHTML = "User denied the request for Geolocation."
		break;
	case error.POSITION_UNAVAILABLE:
		x.innerHTML = "Location information is unavailable."
		break;
	case error.TIMEOUT:
		x.innerHTML = "The request to get user location timed out."
		break;
	case error.UNKNOWN_ERROR:
		x.innerHTML = "An unknown error occurred."
		break;
	}
}

function normshow() {
	var inrVal = $('#eingebeninr').val();

	if (+inrVal > 4) {
		$('#danger').css('visibility', 'visible')
				.css('display', 'inline-block');
		$('#nodanger').css('visibility', 'hidden').css('display', 'none');
		alert("Ihre INR ist zu hoch! ");
	} else {
		$('#danger').css('visibility', 'hidden').css('display', 'none');
		$('#nodanger').css('visibility', 'visible').css('display',
				'inline-block');
	}

}

/*
 * mediApp = { INR : { normshow : function () { console.log('hello')} , maxINR :
 * 5, minINR: 3, arr : [1,2,3,4,5,6,7,8], arr2 : [{1:2},{2:3}]
 *  }, ABC : { normshow : function () { var inrVal = $('#eingebeninr').val();
 * 
 * if ( +inrVal > 4 ) {
 * $('#danger').css('visibility','visible').css('display','inline-block');
 * $('#nodanger').css('visibility','hidden').css('display','none'); } else {
 * $('#danger').css('visibility','hidden').css('display','none');
 * $('#nodanger').css('visibility','visible').css('display','inline-block'); } } } }
 */