var myLatLng = { lat: 31.582045, lng: 74.329376 };
    var myOptions = {
      center: myLatLng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myMap = new google.maps.Map(document.getElementById("map_area"), myOptions);