function initMap() {
	// add your code here

	L.mapquest.key = 'FX6RsgBLwAEOyLlkA7BKinfmNlX98Hbo';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	center: [32.87960966358866, -117.23635512680602],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12,
	zoomControl: false
	});

	L.marker([32.87960966358866, -117.23635512680602]).addTo(map);

}