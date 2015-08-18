var map;
      function initialize() {
        var mapOptions = {
          zoom: 8,
          center: new google.maps.LatLng(30.285827, -97.739139),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('bra-map'),
            mapOptions);
      }
