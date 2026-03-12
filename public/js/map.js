

  // Nominatim se coordinates lo
  fetch(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&limit=1`)
    .then(res => res.json())
    .then(data => {
      if(data.length > 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;

        // Map banao us location pe
        const map = L.map('map').setView([lat, lon], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap'
        }).addTo(map);

        const circle = L.circle([lat,lon], {
         color: 'red',
         fillColor: 'red',
         fillOpacity: 0.3,
         radius: 700,
        }).addTo(map);


        L.circle([lat, lon])
          .addTo(map)
          .bindPopup(`<b><b><h6 style="text-align:center">${cityName}</b></h6><p style="color:green">exact location send after booking</p></b>`)
          .openPopup();

        // Marker bhi lagao
        L.marker([lat, lon])
          .addTo(map)
          .bindPopup(`<b><b><h6 style="text-align:center">${cityName}</b></h6><p style="color:green">exact location send after booking</p></b>`)
          .openPopup();

      } else {
        console.log("City nahi mili!");
      }
    });