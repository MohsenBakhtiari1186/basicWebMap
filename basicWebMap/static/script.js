mapboxgl.accessToken = 'pk.eyJ1IjoibW9oc2VuYmFraHRpYXJpMTg2IiwiYSI6ImNscHF6N3ZlazAydnkycW16Y3NsdGxjY2QifQ.1LcdTjWorGzdWeiaEmRuaw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 2
});

map.on('click', function(e) {
    const coordinates = e.lngLat;
    const x = coordinates.lng;
    const y = coordinates.lat;

    fetch('/coordinates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ x: x, y: y })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => console.error('Error:', error));
});
