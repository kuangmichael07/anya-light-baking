// MAIN NAV

(function(win){
	var doc = win.document;
		
		var toggler = doc.querySelector('.nav-bar a');
		
		var sitewrap = doc.querySelector('.site-wrapper');
		var menu = doc.querySelector('.main-nav ul');
		sitewrap.style.marginTop = '50px';
		menu.style.height = '0px';

		toggler.addEventListener('click',function(e) {
			e.preventDefault();
			if (menu.style.height == '0px') {
				sitewrap.style.marginTop = '160px';
				menu.style.height = 'auto';
				menu.style.display = 'block';

				if (menu.clientHeight != 0) {
					menu.style.height = menu.clientHeight+'px';
					
				}
			} else {				
				sitewrap.style.marginTop = '50px';
				menu.style.height = '0px';
				menu.style.display = 'none';

			}
		});
	}
)(this);

// google map
function initMap() {
  var myLatLng = {lat: 41.841571, lng: -87.652217};
  
  var mapDiv = document.getElementById('map');
  
  var map = new google.maps.Map(mapDiv, {
      zoom: 15,
      center: new google.maps.LatLng(41.841571,-87.652217),
      styles: [
       { 
       	  "featureType": "water", 
       	  "stylers": [ 
       			{ "hue": "#00ddff" }, { "saturation": -9 }, { "lightness": -56 } 
       	  ] 
       	},{ 
       	  featureType: "poi",
       	  stylers: [ 
       	    { "hue": "#ff1a00" },
       	    { "lightness": 26 }, 
       	    { "saturation": 31 } 
       	  ] 
       	},{ 
       	  featureType: "poi.park",
       	  elementType: "geometry.fill", 
       	  stylers: [ 
       	    { "hue": "#00ff80" }, 
       	    { "lightness": -4 }, 
       	    { "saturation": -45 } 
       	  ] 
       	},{ 
       	  featureType: "landscape.man_made", 
       	  stylers: [ 
       	    { "hue": "#ff0000" }, 
       	    { "saturation": -68 }, 
       	    { "lightness": -11 } 
       	  ] 
       	},{ 
       	  featureType: "road.highway", 
       	  stylers: [ 
       	    { "color": "#808080" } 
       	  ] },{ },{ } ]
      
  });
  
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'ANYA'
  });
}


//load google map
var btn = window.document.querySelector('#load-map');

$("i").on("click", function(){
		window.alert("Hello world!!!!");											
//         $(".map").hide();
		// 
		initMap();

      });

// google map ends here




