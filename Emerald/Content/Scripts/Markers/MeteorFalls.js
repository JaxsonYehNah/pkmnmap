var MeteorFalls = L.tileLayer('Tilesets/MeteorFalls/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var MeteorFallsInfo = L.geoJson(MeteorFallsVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var MeteorFallsItemLayer = L.layerGroup();
var MeteorFallsHiddenItemLayer = L.layerGroup();
var MeteorFallsEntranceItemLayer = L.layerGroup();

var currentMap = "Meteor Falls";

function MeteorFallsf(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();
    map.setView([-48, 100], 5);

    MeteorFalls.addTo(map);
    MeteorFallsInfo.addTo(map);
    MeteorFallsItemLayer.addTo(map);
    MeteorFallsHiddenItemLayer.addTo(map);
    MeteorFallsEntranceItemLayer.addTo(map);

    currentMap = "Meteor Falls";


    console.log(e.target.name);
    map.options.minZoom = 5;

    var dif = 15;

    var swview = [(-43 - dif), (96 - dif)];
    var neview = [(-43 + dif), (96 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-190, 396, "Overworld", entrance, currentMap);
markerSet(-211, 375, "Overworld", entrance, currentMap);

markerSet(-176, 396, "Full Heal", itemIcon, currentMap);
markerSet(-185, 371, "Moon Stone", itemIcon, currentMap);
markerSet(-175, 371, "TM23 (Iron Tail)", itemIcon, currentMap);
markerSet(-203, 395, "PP UP", itemIcon, currentMap);
markerSet(-143, 417, "TM02 (Dragon Claw)", itemIcon, currentMap);