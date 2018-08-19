function infoPlaces(place) {
    const name = place.name;
    const radius = place.vicinity;
    const photo = place.photos[0].getUrl({ 'maxWidth': 350, 'maxHeight': 350 });

    const containerInfo = document.getElementById('imgInfo');
    containerInfo.innerHTML += `<h4>${name}</h4><p>${radius}</p><img src='${photo}'></img>`
        // console.log(name);
        // console.log(radius);
        // console.log(photo);
}


function createMarker(place) {
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);

        infowindow.open(map, this);
    });
}