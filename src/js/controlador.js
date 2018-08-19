function callback(results, status) {

    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
            createMarker(results[i]);
            //console.log(results);
            infoPlaces(results[i]);
        }
    }
}