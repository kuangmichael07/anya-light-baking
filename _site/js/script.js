// MAIN NAV

(function(win){
	var doc = win.document;

// 		var toggler = doc.createElement('a');
// 		toggler.className = 'toggle-menu';
// 		toggler.href = '#';
// 		toggler.innerHTML = 'menu';
// 		doc.querySelector('.nav-bar').appendChild(toggler);
		
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

function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: {lat: 44.540, lng: -78.546},
      zoom: 8
  });
}


