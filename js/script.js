 // Ensure the map container has a defined height
      document.getElementById("map").style.height = "400px";

      // Location Coordinates for Antwerpen
      const locationCoordinates = [51.2194, 4.4025];

      // Initialize the Map
      const map = L.map("map").setView(locationCoordinates, 13);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add Marker
      L.marker(locationCoordinates)
        .addTo(map)
        .bindPopup("<b>Ellermanstraat 33</b><br>2060 Antwerpen")
        .openPopup();

      // Ensure map is correctly displayed after rendering
      setTimeout(() => {
        map.invalidateSize();
      }, 100);