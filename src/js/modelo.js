var map;
var infowindow;

navigator.geolocation.getCurrentPosition(initMap);

function initMap(position) {


    //obtenemos coordenadas
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let locate = { lat, lng };
    map = new google.maps.Map(document.getElementById("map"), {
        center: locate,
        zoom: 13
    });

    infowindow = new google.maps.InfoWindow();
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: locate, //localizacion
        radius: 500, //radio
        type: ["restaurant"]
    }, callback)
};