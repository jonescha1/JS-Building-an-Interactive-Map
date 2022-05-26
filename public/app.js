// create map
var myMap = L.map("map").setView([48.868672, 2.34213], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(myMap);

// create and add a geolocation marker
var marker = L.marker([48.87007, 2.346453]);
marker.addTo(myMap).bindPopup("<p1><b>The Hoxton, Paris</b></p1>").openPopup();

// draw the 2nd arrondissement
var polygon = L.polygon([
  [48.863368120198004, 2.3509079846928516],
  [48.86933262048345, 2.3542531602919805],
  [48.87199261164275, 2.3400569901592183],
  [48.86993336274516, 2.3280142476578813],
  [48.86834104280146, 2.330308418109664],
]).addTo(myMap);

// create red pin marker
var redPin = L.icon({
  iconUrl: "assets/red-pin.png",
  iconSize: [38, 38],
  iconAncor: [19, 38],
});

// Metro station markers:
var rS = L.marker([48.866200610611926, 2.352236247419453], {
  icon: redPin,
}).bindPopup("RÃ©aumur-SÃ©bastopol");

var sSD = L.marker([48.869531786321566, 2.3528590208055196], {
  icon: redPin,
}).bindPopup("Strasbourg-Saint-Denis");
var sentier = L.marker([48.8673721067762, 2.347107922912739], {
  icon: redPin,
}).bindPopup("Sentier");
var bourse = L.marker([48.86868503971672, 2.3412285142058167], {
  icon: redPin,
}).bindPopup("Bourse");
var qS = L.marker([48.869560129483226, 2.3358638645569543], {
  icon: redPin,
}).bindPopup("Quatre Septembre");
var gB = L.marker([48.871282159004856, 2.3434818588892714], {
  icon: redPin,
}).bindPopup("Grands Boulevards");

var stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap);
