var GraniteCave = L.tileLayer('Tilesets/GraniteCave/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var GraniteCaveInfo = L.geoJson(GraniteCaveVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var GraniteCaveItemLayer = L.layerGroup();
var GraniteCaveHiddenItemLayer = L.layerGroup();
var GraniteCaveBerryItemLayer = L.layerGroup();
var GraniteCaveTMItemLayer = L.layerGroup();
var GraniteCaveEntranceItemLayer = L.layerGroup();

function GraniteCavef(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();
    map.setView([-48, 100], 6);

    GraniteCave.addTo(map);
    GraniteCaveInfo.addTo(map);
    GraniteCaveItemLayer.addTo(map);
    GraniteCaveHiddenItemLayer.addTo(map);
    GraniteCaveTMItemLayer.addTo(map);
    GraniteCaveEntranceItemLayer.addTo(map);

    currentMap = "Granite Cave";

    console.log(e.target.name);
    map.options.minZoom = 6;

    var dif = 15;

    var swview = [(-48 - dif), (100 - dif)];
    var neview = [(-48 + dif), (100 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

var currentMap = "Granite Cave";

markerSet(-183, 416, "Overworld", entrance, currentMap);


markerSet(-219, 412, "Everstone", hitemIcon, currentMap);
markerSet(-224, 399, "Everstone", hitemIcon, currentMap);