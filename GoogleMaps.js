 function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(8.00, 2.00),
          zoom: 6,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        var heatMapData = [
          //This is where we would put the data from the server//
		  {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5},
		  new google.maps.LatLng(37.782, -122.445),
		  {location: new google.maps.LatLng(37.782, -122.443), weight: 2},
		  {location: new google.maps.LatLng(37.782, -122.441), weight: 3},
		  {location: new google.maps.LatLng(37.782, -122.439), weight: 2},
		  new google.maps.LatLng(37.782, -122.437),
		  {location: new google.maps.LatLng(37.782, -122.435), weight: 0.5},

		  {location: new google.maps.LatLng(37.785, -122.447), weight: 3},
		  {location: new google.maps.LatLng(37.785, -122.445), weight: 2},
		  new google.maps.LatLng(37.785, -122.443),
		  {location: new google.maps.LatLng(37.785, -122.441), weight: 0.5},
		  new google.maps.LatLng(37.785, -122.439),
		  {location: new google.maps.LatLng(37.785, -122.437), weight: 2},
		  {location: new google.maps.LatLng(37.785, -122.435), weight: 3}
		];
		var heatmap = new google.maps.visualization.HeatmapLayer({
		  data: heatMapData
		});
		heatmap.setMap(map);
      }
google.maps.event.addDomListener(window, 'load', initialize);

