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

function normshow() {
    var inrVal = $('#eingebeninr').val();
    
    if ( +inrVal > 4 ) {
        $('#danger').css('visibility','visible').css('display','inline-block');
        $('#nodanger').css('visibility','hidden').css('display','none');
        alert("Ihre INR ist zu hoch! ");
    } 
    else
    {
        $('#danger').css('visibility','hidden').css('display','none');
        $('#nodanger').css('visibility','visible').css('display','inline-block');
    }

}