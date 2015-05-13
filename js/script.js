var map = L.map('map').setView([41.498292501398545, -72.8887939453125], 9),
  legend = L.control({position: "bottomright"}),
  newHaven16,
  bridgeport16,
  danbury16,
  hartford16,
  stamford16,
  waterbury16,
  newHaven30,
  bridgeport30,
  danbury30,
  hartford30,
  stamford30,
  waterbury30,
  newBritain16,
  newBritain30,
  newLondon16,
  newLondon30,
  norwalk16,
  norwalk30,
  overlays;

function getColor(c) {
  return c >= 9500 ? "#99000d" :
    c >= 8100 ? "#cb181d" :
    c >= 6700 ? "#ef3b2c" :
    c >= 5300 ? "#fb6a4a" :
    c >= 3900 ? "#fc9272" :
    c >= 2500 ? "#fcbba1" :
    "#FFFFFF";
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.hhi_with_systems),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
}

function radiusStyle(feature) {
  return {
    fillColor: getColor(feature.properties.hhi_with_systems),
    weight: 3,
    opacity: 1,
    color: 'blue',
    fillOpacity: 1
  };
}

legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0,2500,3900, 5300, 6700, 8100, 9500],
    labels = [],
    from, to;

  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      "<i style='background:" + getColor(from + 1) + "'><\/i> " + from + (to ? "&ndash;" + to : "+")
    );
  }

  div.innerHTML = labels.join('<br>')
  return div;
};

L.tileLayer('http://{s}.tiles.mapbox.com/v4/treznick.6b141342/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidHJlem5pY2siLCJhIjoicUJoRUNEayJ9.w7n_gDkIG_SuGw7YCqJxkA', {
  attribution: "<a href='http://www.mapbox.com/about/maps/' target='_blank'>Terms &amp; Feedback<\/a>"
}).addTo(map);

L.geoJson.ajax("./data/all_ct.geojson",{ style: style }).addTo(map);

newHaven16 = L.geoJson.ajax("./data/new-haven-16.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("New Haven 16");
  }
});

bridgeport16 = L.geoJson.ajax("./data/bridgeport-16.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Bridgeport 16");
  }
});

danbury16 = L.geoJson.ajax("./data/danbury-16.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Danbury 16");
  }
});

hartford16 = L.geoJson.ajax("./data/hartford-16.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Hartford 16");
  }
});

stamford16 = L.geoJson.ajax("./data/stamford-16.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Stamford 16");
  }
});

waterbury16 = L.geoJson.ajax("./data/waterbury-16.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Waterbury 16");
  }
});

newHaven30 = L.geoJson.ajax("./data/new-haven-30.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("New Haven 30");
  }
});

bridgeport30 = L.geoJson.ajax("./data/bridgeport-30.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Bridgeport 30");
  }
});

danbury30 = L.geoJson.ajax("./data/danbury-30.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Danbury 30");
  }
});

hartford30 = L.geoJson.ajax("./data//hartford-30.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Hartford 30");
  }
});

stamford30 = L.geoJson.ajax("./data/stamford-30.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Stamford 30");
  }
});

waterbury30 = L.geoJson.ajax("./data/waterbury-30.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Waterbury 30");
  }
});

newBritain16 = L.geoJson.ajax("./data/new-britain-16.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("New Britain 16");
  }
});

newBritain30 = L.geoJson.ajax("./data/new-britain-30.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("New Britain 30");
  }
});

newLondon16 = L.geoJson.ajax("./data/new-london-16.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("New London 16");
  }
});

newLondon30 = L.geoJson.ajax("./data/new-london-30.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("New London 30");
  }
});

norwalk16 = L.geoJson.ajax("./data/norwalk-16.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Norwalk 16");
  }
});

norwalk30 = L.geoJson.ajax("./data/norwalk-30.geojson",{
  style: radiusStyle,
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Norwalk 30");
  }
});


overlays = {
  "New Haven 16"   : newHaven16,
  "Bridgeport 16"  : bridgeport16,
  "Danbury 16"     : danbury16,
  "Hartford 16"    : hartford16,
  "Stamford 16"    : stamford16,
  "New Britain 16" : newBritain16,
  "New London 16"  : newLondon16,
  "Norwalk 16"     : norwalk16,
  "Waterbury 16"   : waterbury16,
  "New Haven 30"   : newHaven30,
  "Bridgeport 30"  : bridgeport30,
  "Danbury 30"     : danbury30,
  "Hartford 30"    : hartford30,
  "Stamford 30"    : stamford30,
  "New Britain 30" : newBritain30,
  "New London 30"  : newLondon30,
  "Norwalk 30"     : norwalk30,
  "Waterbury 30"   : waterbury30
};

L.control.layers({}, overlays,{position: "topright", collapsed: false}).addTo(map);
legend.addTo(map);
