function setup() {

//Created a map
var map = L.map('mapid').setView([41.953393, -87.654855], 12);

//Map style
var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Jiyu Kim | Dynamic Info Visualization',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 17,
    ext: 'png'
});
map.addLayer(Stamen_Toner);

//Pinpoint-home
var home = L.marker([41.952393, -87.654855], {
    icon: L.divIcon({
    className: "home1",
    html: "H",
    popupAnchor: [8, -10]
  })
}).addTo(map)
    .bindPopup("<br><img src='https://github.com/jyunius/jyunius.github.io/blob/master/img/home.png?raw=true' width='150' height='150' class='center'/><br><br><b><span class='title'>Home</span></b></br><hr><i class='fa fa-location-arrow'></i>&nbsp;3834 N Sheffield Ave.<br><span class='input-group-addon'><i class='fa fa-calendar' aria-hidden='true'></i></span>&nbsp;22th-26th July, 2019<p class='para'>My friend, Bin Choi visited the United States 22 to 26 July, 2019. I served as a guide for her. Let's follow our tracks!</p>", {className: "popuphome"})
    .openPopup();


    //Pinpoint-friend1 trip
      //airport
    var f1_1 = L.marker([41.976323,	-87.907368], {
        icon: L.divIcon({
        className: "friend1",
        html: "1",
        popupAnchor: [8, -10]
      })
    }).addTo(map)
        .bindPopup("<br><img src='https://github.com/jyunius/jyunius.github.io/blob/master/img/Screen%20Shot%202020-05-07%20at%206.43.13%20AM.png?raw=true' width='150' height='150' class='center'/><br><br><b><span class='title2'>O'hare International Airport</span></b></br><hr><span class='input-group-addon'><i class='fa fa-location-arrow' aria-hidden='true'></i></span>&nbsp;10000 W O'Hare Ave.<br><span class='input-group-addon'><i class='fa fa-calendar' aria-hidden='true'></i></span>&nbsp;22th July, 2019<br><span class='input-group-addon'><i class='fa fa-clock-o' aria-hidden='true'></i></span>&nbsp;11:00am<br><p class='para'>My friend, Bin visited the United States. I picked her up at O'hare Internation Airport.</p>", {className: "f1_popup"});

      //Art Instituete of Chicago
    var f1_2 = L.marker([41.879438, -87.623934], {
        icon: L.divIcon({
        className: "friend1",
        html: "2",
        popupAnchor: [8, -10]
      })
    }).addTo(map)
        .bindPopup("<br><img src='https://github.com/jyunius/jyunius.github.io/blob/master/img/Screen%20Shot%202020-05-07%20at%206.39.06%20AM.png?raw=true' width='150' height='150' class='center'/><br><br><b><span class='title2'>Art Instituete </br>of Chicago</span></b></br><hr><span class='input-group-addon'><i class='fa fa-location-arrow' aria-hidden='true'></i></span>&nbsp;111 S Michigan Ave.<br><span class='input-group-addon'><i class='fa fa-calendar' aria-hidden='true'></i></span>&nbsp;22th July, 2019<br><span class='input-group-addon'><i class='fa fa-clock-o' aria-hidden='true'></i></span>&nbsp;3:00pm<br><p class='para'>We toured the art museum and went the museum shop together.</p>", {className: "f1_popup"});

      //Vapiano
    var f1_3 = L.marker([41.881008, -87.626404], {
        icon: L.divIcon({
        className: "friend1",
        html: "3",
        popupAnchor: [8, -10]
      })
    }).addTo(map)
        .bindPopup("<br><img src='https://github.com/jyunius/jyunius.github.io/blob/master/img/Screen%20Shot%202020-05-07%20at%206.39.23%20AM.png?raw=true' width='150' height='150' class='center'/><br><br><b><span class='title2'>Vapiano</span></b></br><hr><span class='input-group-addon'><i class='fa fa-location-arrow' aria-hidden='true'></i></span>&nbsp;44 S Wabash Ave.<br><span class='input-group-addon'><i class='fa fa-calendar' aria-hidden='true'></i></span>&nbsp;22th July, 2019<br><span class='input-group-addon'><i class='fa fa-clock-o' aria-hidden='true'></i></span>&nbsp;5:00pm<br><p class='para'>We ate a late lunch at Vapiano.</p>", {className: "f1_popup"});

      //360 CHICAGO
    var f1_4 = L.marker([41.899000, -87.623543], {
        icon: L.divIcon({
        className: "friend2",
        html: "4",
        popupAnchor: [8, -10]
      })
    }).addTo(map)
        .bindPopup("<br><img src='https://github.com/jyunius/jyunius.github.io/blob/master/img/Screen%20Shot%202020-05-07%20at%206.39.15%20AM.png?raw=true' width='150' height='150' class='center'/><br><br><b><span class='title2'>360 CHICAGO</span></b></br><hr><span class='input-group-addon'><i class='fa fa-location-arrow' aria-hidden='true'></i></span>&nbsp;875 N Michigan Ave. </br>94th floor<br><span class='input-group-addon'><i class='fa fa-calendar' aria-hidden='true'></i></span>&nbsp;23th July, 2019<br><span class='input-group-addon'><i class='fa fa-clock-o' aria-hidden='true'></i></span>&nbsp;10:00am<br><p class='para'>Getting to the top of 360 Chicago building ended up beting a task that required a lot of time and patience.</p>", {className: "f2_popup"});

        //Andy's Jazz Culb
      var f1_5 = L.marker([41.890045, -87.627476], {
          icon: L.divIcon({
          className: "friend2",
          html: "5",
          popupAnchor: [8, -10]
        })
      }).addTo(map)
          .bindPopup("<br><img src='https://github.com/jyunius/jyunius.github.io/blob/master/img/Screen%20Shot%202020-05-07%20at%206.39.29%20AM.png?raw=true' width='150' height='150' class='center'/><br><br><b><span class='title2'>Andy's Jazz Culb</span></b></br><hr><span class='input-group-addon'><i class='fa fa-location-arrow' aria-hidden='true'></i></span>&nbsp;11 E Hubbard St.<br><span class='input-group-addon'><i class='fa fa-calendar' aria-hidden='true'></i></span>&nbsp;23th July, 2019<br><span class='input-group-addon'><i class='fa fa-clock-o' aria-hidden='true'></i></span>&nbsp;5:00pm<br><p class='para'>I brought her to Andy's Jazz Club and gave her a couple of drinks.</p>", {className: "f2_popup"});

        //Thalia Hall
      var f1_6 = L.marker([41.857765, -87.657448], {
          icon: L.divIcon({
          className: "friend3",
          html: "6",
          popupAnchor: [8, -10]
        })
      }).addTo(map)
          .bindPopup("<br><img src='https://github.com/jyunius/jyunius.github.io/blob/master/img/Screen%20Shot%202020-05-07%20at%206.45.54%20AM.png?raw=true' width='150' height='150' class='center'/><br><br><b><span class='title2'>Thalia Hall</span></b></br><hr><span class='input-group-addon'><i class='fa fa-location-arrow' aria-hidden='true'></i></span>&nbsp;1807 S Allport St.<br><span class='input-group-addon'><i class='fa fa-calendar' aria-hidden='true'></i></span>&nbsp;24th July, 2019<br><span class='input-group-addon'><i class='fa fa-clock-o' aria-hidden='true'></i></span>&nbsp;6:00pm<br><p class='para'>We went to Corinne Bailey Rae's concert. It was my first time that I went to a concret.</p>", {className: "f3_popup"});

          //Museum of Science and Industry
        var f1_7 = L.marker([41.790653, -87.583077], {
            icon: L.divIcon({
            className: "friend4",
            html: "7",
            popupAnchor: [8, -10]
          })
        }).addTo(map)
            .bindPopup("<br><img src='https://github.com/jyunius/jyunius.github.io/blob/master/img/Screen%20Shot%202020-05-07%20at%206.38.51%20AM.png?raw=true' width='150' height='150' class='center'/><br><br><b><span class='title2'>Museum of Science and Industry</span></b></br><hr><span class='input-group-addon'><i class='fa fa-location-arrow' aria-hidden='true'></i></span>&nbsp;5700 S Lake Shore Dr.<br><span class='input-group-addon'><i class='fa fa-calendar' aria-hidden='true'></i></span>&nbsp;25th July, 2019<br><span class='input-group-addon'><i class='fa fa-clock-o' aria-hidden='true'></i></span>&nbsp;2:00pm<br><p class='para'>What am amazing museum! I feel like you need two visits to really see it all.</p>", {className: "f4_popup"});

            //airport
          var f1_8 = L.marker([41.974988, -87.897159], {
              icon: L.divIcon({
              className: "friend5",
              html: "8",
              popupAnchor: [8, -10]
            })
          }).addTo(map)
              .bindPopup("<br><img src='https://github.com/jyunius/jyunius.github.io/blob/master/img/Screen%20Shot%202020-05-07%20at%206.43.25%20AM.png?raw=true' width='150' height='150' class='center'/><br><br><b><span class='title2'>O'hare International Airport</span></b></br><hr><span class='input-group-addon'><i class='fa fa-location-arrow' aria-hidden='true'></i></span>&nbsp;10000 W O'Hare Ave.<br><span class='input-group-addon'><i class='fa fa-calendar' aria-hidden='true'></i></span>&nbsp;26th July, 2019<br><span class='input-group-addon'><i class='fa fa-clock-o' aria-hidden='true'></i></span>&nbsp;8:00am<br><p class='para'>Bin returened to Korea. I droppped off Bin at the airport.</p>", {className: "f5_popup"});


    //route
    var route1 = [
    [41.952393, -87.654855],
    [41.954493, -87.654536],
    [41.953632, -87.731426],
    [41.953632, -87.731426],
    [41.955252, -87.732542],
    [41.982263, -87.783687],
    [41.984325, -87.870242],
    [41.976323,	-87.907368],
    ];

    var route2 = [
    [41.976323,	-87.907368],
    [41.981147, -87.783813],
    [41.919866, -87.672577],
    [41.897126, -87.660560],
    [41.884092, -87.646827],
    [41.883369, -87.624682],
    [41.883248, -87.624512],
    [41.879438, -87.623934],
    ];

    var route3 = [
    [41.879438, -87.623934],
    [41.880945, -87.622287],
    [41.880793, -87.617303],
    [41.884277, -87.613641],
    [41.893061, -87.613743],
    [41.901011, -87.619745],
    [41.902071, -87.623203],
    [41.934938, -87.632243],
    [41.954794, -87.644017],
    [41.954621, -87.654508],
    [41.952393, -87.654855],
    ];

    var route4 = [
    [41.952393, -87.654855],
    [41.954429, -87.654501],
    [41.954924, -87.644978],
    [41.953083, -87.644597],
    [41.935020, -87.633074],
    [41.912770, -87.625931],
    [41.902423, -87.624312],
    [41.899162, -87.624598],
    [41.899000, -87.623543],
    ];

    var route5 = [
    [41.899000, -87.623543],
    [41.899092, -87.618688],
    [41.893441, -87.614941],
    [41.893465, -87.620331],
    [41.891875, -87.620298],
    [41.891826, -87.624275],
    [41.890114, -87.624176],
    [41.890045, -87.627476],
    ];

    var route6 = [
    [41.890045, -87.627476],
    [41.890067, -87.623903],
    [41.888315, -87.624557],
    [41.887440, -87.614101],
    [41.892791, -87.613905],
    [41.901352, -87.619721],
    [41.902325, -87.623577],
    [41.912246, -87.626060],
    [41.935466, -87.632654],
    [41.954390, -87.644198],
    [41.954916, -87.654328],
    [41.952393, -87.654855],
    ];

    var route7 = [
    [41.952393, -87.654855],
    [41.954105, -87.654977],
    [41.954743, -87.645020],
    [41.952956, -87.644848],
    [41.935336, -87.632832],
    [41.902509, -87.624421],
    [41.901103, -87.620301],
    [41.891775, -87.614293],
    [41.884747, -87.614121],
    [41.882574, -87.617554],
    [41.870048, -87.616696],
    [41.866980, -87.619958],
    [41.850104, -87.613949],
    [41.847674, -87.631459],
    [41.850615, -87.645020],
    [41.856241, -87.643304],
    [41.854707, -87.646565],
    [41.857648, -87.647080],
  ];

    var route8 = [
    [41.857765, -87.657448],
    [41.857648, -87.647080],
    [41.887389, -87.645858],
    [41.896878, -87.658261],
    [41.907006, -87.661534],
    [41.917902, -87.669802],
    [41.917926, -87.667871],
    [41.947205, -87.668671],
    [41.947334, -87.654439],
    [41.952393, -87.654855],
];

    var route9 = [
    [41.952393, -87.654855],
    [41.953927, -87.654634],
    [41.955305, -87.645501],
    [41.935516, -87.633588],
    [41.915228, -87.627763],
    [41.902421, -87.624057],
    [41.900747, -87.620086],
    [41.892564, -87.614775],
    [41.884840, -87.614269],
    [41.882793, -87.617405],
    [41.865409, -87.619465],
    [41.832930, -87.607277],
    [41.826918, -87.601612],
    [41.804913, -87.583416],
    [41.798770, -87.581013],
    [41.795729, -87.578614],
    [41.792573, -87.580476],
    [41.792384, -87.585301],
    [41.790427, -87.585555],
    ];

    var route10 = [
    [41.790427, -87.585555],
    [41.790364, -87.585482],
    [41.792289, -87.584993],
    [41.792454, -87.580409],
    [41.795905, -87.579118],
    [41.803636, -87.581833],
    [41.811000, -87.589221],
    [41.830922, -87.605515],
    [41.868514, -87.618512],
    [41.887087, -87.613843],
    [41.901460, -87.620769],
    [41.934569, -87.632942],
    [41.944404, -87.640918],
    [41.954863, -87.644695],
    [41.954533, -87.654608],
    [41.952393, -87.654855],
    ];

    var route11 = [
    [41.952393, -87.654855],
    [41.954493, -87.654536],
    [41.953632, -87.731426],
    [41.953632, -87.731426],
    [41.955252, -87.732542],
    [41.982263, -87.783687],
    [41.984325, -87.870242],
    [41.974988, -87.897159],
    ];
    var route12 = [
    [41.983065, -87.786323],
    [41.953454, -87.731048],
    [41.954430, -87.654704],
    [41.952173, -87.654704],
    ];

var route1_1 = L.polyline(route1, {color: '#203db8'})
var route1_2 = L.polyline(route2, {color: '#203db8'})
var route1_3 = L.polyline(route3, {color: '#203db8'})
var route2_1 = L.polyline(route4, {color: '#126634'})
var route2_2 = L.polyline(route5, {color: '#126634'})
var route2_3 = L.polyline(route6, {color: '#126634'})
var route3_1 = L.polyline(route7, {color: '#a35119'})
var route3_2 = L.polyline(route8, {color: '#a35119'})
var route4_1 = L.polyline(route9, {color: '#af3138'})
var route4_2 = L.polyline(route10, {color: '#af3138'})
var route5_1 = L.polyline(route11, {color: '#bcc108'})
var route5_2 = L.polyline(route12, {color: '#bcc108'})

//Grouping
var home = L.layerGroup([home]);
var bin = L.layerGroup([f1_1, f1_2, f1_3, f1_4, f1_5, f1_6, f1_7, f1_8]);
var first = L.layerGroup([f1_1, f1_2, f1_3, route1_1,route1_2, route1_3]);
var second = L.layerGroup([f1_4, f1_5, route2_1, route2_2, route2_3]);
var third = L.layerGroup([f1_6,route3_1,route3_2]);
var forth = L.layerGroup([f1_7,route4_1,route4_2]);
var fifth = L.layerGroup([f1_8,route5_1,route5_2]);


var overlays = {
    "All PLACES": bin,
    "1ST DAY": first,
    "2ND DAY": second,
    "3RD DAY": third,
    "4TH DAY": forth,
    "LAST DAY": fifth,
};

//Created a controller
L.control.layers(overlays).addTo(map);


}

function draw() {

}
