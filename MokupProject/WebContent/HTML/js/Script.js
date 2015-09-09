
   google.load("visualization", "1", {packages:["corechart"]});
   google.setOnLoadCallback(drawChart);
   function drawChart() {
    var data = google.visualization.arrayToDataTable([
     ['Jahr', 'Ka', 'Ka2'],
     ['Juni', 1.3, 70],
     ['Juli', 2000, 3120],
     ['August', 12170, 9920],
         ['August', 15170, 9220]
    ]);
    var options = {
     title: 'Dosierungen von die Medikamenten',
     hAxis: {title: 'Datum'},
     vAxis: {title: 'Dosierung in Mg'}
    };
    
    var chart = new google.visualization.ColumnChart(document.getElementById('oil'));
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
    +latlon+"&zoom=12&size=600x300&sensor=true";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
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