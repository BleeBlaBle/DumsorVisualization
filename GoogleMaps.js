 function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(8.00, 2.00),
          zoom: 6,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        var heatmapData = [
		  new google.maps.LatLng(37.782, -122.447),
		  new google.maps.LatLng(37.782, -122.445),
		  new google.maps.LatLng(37.782, -122.443),
		  new google.maps.LatLng(37.782, -122.441),
		  new google.maps.LatLng(37.782, -122.439),
		  new google.maps.LatLng(37.782, -122.437),
		  new google.maps.LatLng(37.782, -122.435),
		  new google.maps.LatLng(37.785, -122.447),
		  new google.maps.LatLng(37.785, -122.445),
		  new google.maps.LatLng(37.785, -122.443),
		  new google.maps.LatLng(37.785, -122.441),
		  new google.maps.LatLng(37.785, -122.439),
		  new google.maps.LatLng(37.785, -122.437),
		  new google.maps.LatLng(37.785, -122.435)
		];

		var heatmap = new google.maps.visualization.HeatmapLayer({
		  data: heatmapData
		});
		heatmap.setMap(map);
      }
google.maps.event.addDomListener(window, 'load', initialize);

