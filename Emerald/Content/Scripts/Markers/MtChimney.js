var MtChimney = L.tileLayer('Tilesets/MtChimney/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var MtChimneyInfo = L.geoJson(MtChimneyVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var MtChimneyItemLayer = L.layerGroup();
var MtChimneyHiddenItemLayer = L.layerGroup();
var MtChimneyBerryItemLayer = L.layerGroup();
var MtChimneyTMItemLayer = L.layerGroup();
var MtChimneyEntranceItemLayer = L.layerGroup();

var currentMap = "Mt Chimney";

function MtChimneyf(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();
    map.setView([-48, 100], 6);

    MtChimney.addTo(map);
    MtChimneyInfo.addTo(map);
    MtChimneyItemLayer.addTo(map);
    MtChimneyHiddenItemLayer.addTo(map);
    MtChimneyTMItemLayer.addTo(map);
    MtChimneyEntranceItemLayer.addTo(map);

    currentMap = "Mt Chimney";

    console.log(e.target.name);
    map.options.minZoom = 6;

    var dif = 10;

    var swview = [(-48 - dif), (100 - dif)];
    var neview = [(-48 + dif), (100 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-204, 397, "Overworld", entrance, currentMap);
markerSet(-204, 398, "Overworld", entrance, currentMap);

markerSet(-209, 400, "Jagged Pass", entrance, currentMap);
markerSet(-209, 401, "Jagged Pass", entrance, currentMap);