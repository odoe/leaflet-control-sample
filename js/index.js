var map = L.map('map').setView([34.0531, -118.2321], 13);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(map);

var items = [];

// nice leaflet-ajax plugin
// https://github.com/calvinmetcalf/leaflet-ajax
var geojsonLayer = L.geoJson.ajax('parks.geojson', {
  onEachFeature: function(data, layer) {
    items.push(data);
    layer.bindPopup('<h3>' + data.properties.park + '</h3>');
  }
});

geojsonLayer.addTo(map);

L.control.search({
  data: items
}).addTo(map);

