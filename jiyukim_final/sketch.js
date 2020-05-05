let img;
function preload() {
img = loadImage('img/ho.JPG');
}

function setup() {
  createCanvas(800, 500);

  var map = L.map('mapid').setView([41.952393, -87.654855], 100);
  var img = loadImage("img/ho.JPG");

  //THIS IS ROUTE
  var dir ;

  //dir = MQ.routing.directions();

//map style
var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});
map.addLayer(Stamen_Toner);


//pinpoint
var airport = L.marker([41.976323,	-87.907368])
    .bindPopup('<br><b>1/15/20</b><br><i>Ohare International Airport, IL</i><br>My friend who visited me went back to Korea.<br> I accompanied with my friend to the airport.')
    .openPopup();

var hmart = L.marker([41.877854,	-87.644291])
    .bindPopup('<br><b>1/15/20</b><br><i>H mart IL</i><br>I went to grocery shopping.')
    .openPopup();

var joongboo = L.marker([41.944026, -87.712842])
    .bindPopup('<br><b>7/10/19</b><br><i>Joongboo M, IL</i><br>I went to grocery shopping. This place is one of favorites grocery market.')
    .openPopup();

var home = L.marker([41.952732, -87.654922]).addTo(map)
    .bindPopup('<img src=" + img/ho.JPG + "/><br><b>My Home</b><br>3834 N Sheffield Ave.<br>')
    .openPopup();

var _86P = L.marker([41.875026, -88.017117])
    .bindPopup('<b>2/27/19</b><br><i>16 E Madison St, IL</i>')
    .openPopup();

var _88P = L.marker([41.933029,	-87.684426])
    .bindPopup('<b>3/15/19</b><br><i>103 W Wolfam St, IL</i>')
    .openPopup();

var _88D = L.marker([41.934192, -87.639821])
    .bindPopup('<br><b>1/15/19</b><br><i>BJB Properties</i><br>I went to office to request maintenance.')
    .openPopup();

var _91D = L.marker([41.897264, -87.643420])
    .bindPopup('<b>4/11/19</b><br><i>832 N Larrabee St, IL</i>')
    .openPopup();

var _93D = L.marker([41.937841, -87.648160])
    .bindPopup('<br><b>5/13/19</b><br><i>789 W Barry Ave, IL</i><br>I went to Bank of America because I was scammed for $500.')
    .openPopup();

var _94D = L.marker([41.937841, -87.648160])
    .bindPopup('<br><b>5/13/19</b><br><i>789 W Barry Ave, IL</i>')
    .openPopup();

var _95D = L.marker([41.993025, -88.127873])
    .bindPopup('<br><b>6/10/19</b><br><i>789 W Barry Ave, IL</i>')
    .openPopup();

var _96P = L.marker([42.074937,	-87.805873])
    .bindPopup('<br><b>6/10/19</b><br><i>1119 Lehigh Ave, IL</i><br>I went to visit my friend house.')
    .openPopup();

var _97D = L.marker([41.890897, -87.609899])
    .bindPopup('<br><b>7/6/19</b><br><i>668 N Streeter Dr, IL</i><br>Archichtecture Cruise')
    .openPopup();

var _99D = L.marker([41.944026, -87.712842])
    .bindPopup('<br><b>7/10/19</b><br><i>Joongboo M, IL</i><br>I went to grocery shopping. This place is one of favorites grocery market.')
    .openPopup();

var _100P = L.marker([41.944026, -87.712842])
    .bindPopup('<br><b>7/10/19</b><br><i>Joongboo M, IL</i><br>I went to grocery shopping. This place is one of favorites grocery market.')
    .openPopup();

var _104D = L.marker([41.944026, -87.712842])
    .bindPopup('<br><b>7/26/19</b><br><i>963 W Irving Park Rd, IL</i>')
    .openPopup();

var _105P = L.marker([41.86742, -87.621249])
    .bindPopup('<br><b>7/28/19</b><br><i>1203 S Indiana Ave, IL</i>')
    .openPopup();

var _105D = L.marker([41.858259, -87.651652])
    .bindPopup('<br><b>7/28/19</b><br><i>1002 W 18th St, IL</i>')
    .openPopup();

var _107D = L.marker([41.932566, -87.644826])
    .bindPopup('<br><b>8/14/19</b><br><i>2748 N Clark St, IL</i>')
    .openPopup();

var _108P = L.marker([41.944026, -87.712842])
    .bindPopup('<br><b>8/14/19</b><br><i>Joongboo M, IL</i>')
    .openPopup();

var _110D = L.marker([41.960218,	-87.650691])
    .bindPopup('<br><b>9/8/19</b><br><i>819 W Junior Ter, IL</i>')
    .openPopup();

var _111D = L.marker([41.894329, -87.632250])
    .bindPopup('<br><b>9/12/19</b><br><i>130 W Erie St, IL</i>')
    .openPopup();

var _112D = L.marker([41.884723,	-87.648408])
    .bindPopup('<br><b>11/9/19</b><br><i>820 Randoph St, IL</i>')
    .openPopup();

var _113P = L.marker([41.942145,	-87.712118])
    .bindPopup('<br><b>1/1/20</b><br><i>Joongboo M, IL</i>')
    .openPopup();

var _115P = L.marker([41.885753,	-87.644324])
    .bindPopup('<br><b>1/8/20</b><br><i>190 N Desplaines St, IL</i>')
    .openPopup();

var _120P = L.marker([41.877236, -87.646979])
    .bindPopup('<br><b>1/25/20</b><br><i>327 S Halsted St, IL</i>')
    .openPopup();

//layer group
var majorpoint = L.layerGroup([airport, hmart, home, joongboo]);
var pickup = L.layerGroup([_86P, _88P, _96P, _100P, _113P, _115P, _120P]);
var destination = L.layerGroup([_88D, _91D, _93D, _94D, _95D, _97D, _99D, _104D, _105D, _107D, _110D, _111D , _112D]);
var _2019 = L.layerGroup([_88P, _99D, _91D, _93D, _94D, _95D, _96P, _97D, _99D, _100P, _104D, _105P, _107D, _110D, _111D, _112D]);
var _2020 = L.layerGroup([_113P, _115P, _120P]);


var overlays = {
    "Major Point": majorpoint,
    "Pickup Location": pickup,
    "Dropoff Lacation": destination,
    "Ride of 2019": _2019,
    "Ride of 2020": _2020,
};

//control

L.control.layers(null, overlays).addTo(map);

L.Routing.control({
  waypoints: [
    L.latLng(57.74, 11.94),
    L.latLng(57.6792, 11.949)
  ]
}).addTo(map);
}

function draw() {

}
