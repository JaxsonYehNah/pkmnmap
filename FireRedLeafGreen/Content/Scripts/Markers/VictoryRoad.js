var VictoryRoad = L.tileLayer('Tilesets/VictoryRoad/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
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


markerSet(-143, 416, "Overworld", entrance, "Victory Road");
markerSet(-178, 392, "Overworld", entrance, "Victory Road");


markerSet(-163, 417, "Max Elixir", itemIcon, "Victory Road");
markerSet(-176, 414, "PP UP", itemIcon, "Victory Road");
markerSet(-186, 409, "Full Restore", itemIcon, "Victory Road");
markerSet(-191, 419, "TM29", itemIcon, "Victory Road");
markerSet(-223, 390, "Full Heal", itemIcon, "Victory Road");

markerSet(-220, 405, "Elixir", hitemIcon, "Victory Road");
markerSet(-216, 414, "Max Repel", hitemIcon, "Victory Road");
markerSet(-176, 407, "Ultra Ball", hitemIcon, "Victory Road");