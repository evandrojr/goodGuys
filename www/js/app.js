

// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    // Get the most accurate position updates available on the
    // device.
    var options = { enableHighAccuracy: true };
    //watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
}

// onSuccess Geolocation
//
// function onSuccess(position) {
//     var element = document.getElementById('geolocation');
//     element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
//                                 'Longitude: '          + position.coords.longitude             + '<br />' +
//                                 'Altitude: '           + position.coords.altitude              + '<br />' +
//                                 'Accuracy: '           + position.coords.accuracy              + '<br />' +
//                                 'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
//                                 'Heading: '            + position.coords.heading               + '<br />' +
//                                 'Speed: '              + position.coords.speed                 + '<br />' +
//                                 'Timestamp: '          + position.timestamp                    + '<hr />' +
//                                 element.innerHTML;
// }
