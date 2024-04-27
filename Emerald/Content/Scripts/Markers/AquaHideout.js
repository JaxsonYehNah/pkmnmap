var AquaHideout = L.tileLayer('Tilesets/AquaHideout/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var AquaHideoutInfo = L.geoJson(AquaHideoutVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var AquaHideoutItemLayer = L.layerGroup();
var AquaHideoutHiddenItemLayer = L.layerGroup();
var AquaHideoutBerryItemLayer = L.layerGroup();
var AquaHideoutTMItemLayer = L.layerGroup();
var AquaHideoutEntranceItemLayer = L.layerGroup();

var currentMap = "Aqua Hideout";

function AquaHideoutf(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();

    map.setView([-48, 100], 5);

    AquaHideout.addTo(map);
    AquaHideoutInfo.addTo(map);
    AquaHideoutItemLayer.addTo(map);
    AquaHideoutHiddenItemLayer.addTo(map);
    AquaHideoutTMItemLayer.addTo(map);
    AquaHideoutEntranceItemLayer.addTo(map);
    currentMap = "Aqua Hideout";


    console.log(e.target.name);
    map.options.minZoom = 5;

    var dif = 20;

    var swview = [(-48 - dif), (100 - dif)];
    var neview = [(-48 + dif), (100 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-207, 365, "Overworld", entrance, currentMap);

//Zone 6
markerSet(-188, 399, "Master Ball", itemIcon, currentMap);
markerSet(-189, 399, "Nugget", itemIcon, currentMap);
markerSet(-191, 413, "Max Elixir", itemIcon, currentMap);
markerSet(-192, 442, "Nest Ball", itemIcon, currentMap);
markerSet(-188, 400, "Electrode", itemIcon, currentMap);
markerSet(-189, 400, "Electrode", itemIcon, currentMap);