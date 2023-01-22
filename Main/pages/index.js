// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to


// locate you.
let map, map2, infoWindow, infoWindow2, marker, marker2;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
    zoomControl: false,
    scaleControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    
  });
  infoWindow = new google.maps.InfoWindow();


  marker = new google.maps.Marker();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        
        map.setCenter(pos);
        
        map.setZoom(19);
        

        marker.setPosition(pos);
        
        marker.setMap(map);
        
        
  
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
        handleLocationError(true, infoWindow2, map2.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
    handleLocationError(false, infoWindow2, map2.getCenter());
    }
  };


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
  infoWindow2.open(map2);

}

window.initMap = initMap;