mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWhncmV2eSIsImEiOiJjbDFwZHg2YzkwMTVqM2lzeTgxa29waDNnIn0.8fJhOwF_qreAF9cEeVNUMw';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/satellite-v9', // style URL
zoom: 4.8, // starting zoom
center: [-119.961425, 36.772802] // starting center


});


   



map.on('load', function() {
  map.addLayer(
    {
      id: 'country',
      source: {
        type: 'geojson',
        data: "data/cali3.geojson",
      }, 
      
      type: 'fill',
      paint: {

        'fill-color': {
          property: 'text_new',
          stops: [  [0, '#FFFFFF'],  [1, ' #ff0000']
        ]
          } 
          
          

      },

      
    }, 

    // Add a new layer to visualize the polygon.
map.addLayer({
  'id': 'cali',
  'type': 'fill',
  'source': 'data/cali3.geojson', // reference the data source
  'layout': {},
  'paint': {
  'fill-color': '#0080ff', // blue color fill
  'fill-opacity': 0.5
  }
  });
  // Add a black outline around the polygon.
  map.addLayer({
  'id': 'outline',
  'type': 'line',
  'source': 'data/cali3.geojson',
  'layout': {},
  'paint': {
  'line-color': '#000',
  'line-width': 3
  }
  });

map.addLayer(
  {
    id: "",
    type: "line",
    source: {
      type: "geojson",
      data: "data/cali3.geojson",
    },
    minzoom: 6,
    paint: {
      "line-color": "#ffffff",
      "line-width": 0.25,
    },
  },
  "country"
);
  

    
  );

  

})



  




  // This final argument indicates that we want to add the Boundaries layer
  // before the `waterway-label` layer that is in the map from the Mapbox
  // Light style. This ensures the admin polygons will be rendered on top of
  // the
  'waterway-label'


map.on("click", "country", function (e) {
  var diff = e.features[0].properties.diff;
  var country = e.features[0].properties.country;

  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(`
        <h3>
        ${country} 
        </h3>
        <p>
            <b>${diff}</b> % annual change in wind energy

    `
    )
    .addTo(map);
})

map.on("mouseenter", "country", function () {
  map.getCanvas().style.cursor = "pointer";
});
map.on("mouseleave", "country", function () {
  map.getCanvas().style.cursor = "";
});
