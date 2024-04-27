var FieryPath = L.tileLayer('Tilesets/FieryPath/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var FieryPathInfo = L.geoJson(FieryPathVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var FieryPathItemLayer = L.layerGroup();
var FieryPathHiddenItemLayer = L.layerGroup();
var FieryPathBerryItemLayer = L.layerGroup();
var FieryPathTMItemLayer = L.layerGroup();
var FieryPathEntranceItemLayer = L.layerGroup();

function FieryPathf(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();
    map.setView([-48, 100], 6);

    FieryPath.addTo(map);
    FieryPathInfo.addTo(map);
    FieryPathItemLayer.addTo(map);
    FieryPathHiddenItemLayer.addTo(map);
    FieryPathTMItemLayer.addTo(map);
    FieryPathEntranceItemLayer.addTo(map);

    currentMap = "Fiery Path";

    console.log(e.target.name);
    map.options.minZoom = 6;

    var dif = 10;

    var swview = [(-48 - dif), (100 - dif)];
    var neview = [(-48 + dif), (100 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

var currentMap = "Fiery Path";

markerSet(-178, 409, "Overworld", entrance, currentMap);
markerSet(-210, 409, "Overworld", entrance, currentMap);

markerSet(-205, 390, "Fire Stone", itemIcon, currentMap);
markerSet(-176, 391, "TM06 (Toxic)", tmitemIcon, currentMap);