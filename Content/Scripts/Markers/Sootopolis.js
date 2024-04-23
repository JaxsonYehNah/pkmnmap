var Sootopolis = L.tileLayer('Tilesets/Sootopolis/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:admin@oceanicweb.com.au">email</a>',
    bounds: bounds,
    tileSize: 256
});

var SootopolisInfo = L.geoJson(SootopolisVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var SootopolisItemLayer = L.layerGroup();
var SootopolisHiddenItemLayer = L.layerGroup();
var SootopolisEntranceItemLayer = L.layerGroup();

var currentMap = "Sootopolis";

function Sootopolisf(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();

    map.setView([-48, 100], 5);

    Sootopolis.addTo(map);
    SootopolisInfo.addTo(map);
    SootopolisItemLayer.addTo(map);
    SootopolisHiddenItemLayer.addTo(map);
    SootopolisEntranceItemLayer.addTo(map);
    currentMap = "Sootopolis";

    console.log(e.target.name);
    map.options.minZoom = 5;

    var dif = 15;

    var swview = [(-48 - dif), (100 - dif)];
    var neview = [(-48 + dif), (100 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-216, 398, "Overworld", entrance, currentMap);