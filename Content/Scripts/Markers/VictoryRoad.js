var VictoryRoad = L.tileLayer('Tilesets/VictoryRoad/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:admin@oceanicweb.com.au">email</a>',
    bounds: bounds,
    tileSize: 256
});

var VictoryRoadInfo = L.geoJson(VictoryRoadVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var VictoryRoadItemLayer = L.layerGroup();
var VictoryRoadHiddenItemLayer = L.layerGroup();
var VictoryRoadEntranceItemLayer = L.layerGroup();

var currentMap = "Victory Road";

function VictoryRoadf(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();

    map.setView([-48, 100], 5);

    VictoryRoad.addTo(map);
    VictoryRoadInfo.addTo(map);
    VictoryRoadItemLayer.addTo(map);
    VictoryRoadHiddenItemLayer.addTo(map);
    VictoryRoadEntranceItemLayer.addTo(map);
    currentMap = "Victory Road";

    console.log(e.target.name);
    map.options.minZoom = 5;

    var dif = 25;

    var swview = [(-48 - dif), (100 - dif)];
    var neview = [(-48 + dif), (100 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}


markerSet(-143, 416, "Overworld", entrance, currentMap);
markerSet(-178, 392, "Overworld", entrance, currentMap);


markerSet(-163, 417, "Max Elixir", itemIcon, currentMap);
markerSet(-176, 414, "PP UP", itemIcon, currentMap);
markerSet(-186, 409, "Full Restore", itemIcon, currentMap);
markerSet(-191, 419, "TM29", itemIcon, currentMap);
markerSet(-223, 390, "Full Heal", itemIcon, currentMap);

markerSet(-220, 405, "Elixir", hitemIcon, currentMap);
markerSet(-216, 414, "Max Repel", hitemIcon, currentMap);
markerSet(-176, 407, "Ultra Ball", hitemIcon, currentMap);