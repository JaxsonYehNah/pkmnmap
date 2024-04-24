var MagmaHideout = L.tileLayer('Tilesets/MagmaHideout/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var MagmaHideoutInfo = L.geoJson(MagmaHideoutVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var MagmaHideoutItemLayer = L.layerGroup();
var MagmaHideoutHiddenItemLayer = L.layerGroup();
var MagmaHideoutEntranceItemLayer = L.layerGroup();

function MagmaHideoutf(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();
    map.options.minZoom = 4;
    map.setView([-48, 100], 5);

    MagmaHideout.addTo(map);
    MagmaHideoutInfo.addTo(map);
    MagmaHideoutItemLayer.addTo(map);
    MagmaHideoutHiddenItemLayer.addTo(map);
    MagmaHideoutEntranceItemLayer.addTo(map);

    currentMap = "Magma Hideout";

    console.log(e.target.name);

    var dif = 25;

    var swview = [(-48 - dif), (100 - dif)];
    var neview = [(-48 + dif), (100 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-173, 356, "Overworld", entrance, "Magma Hideout");


markerSet(-158, 349, "Rare Candy", itemIcon, "Magma Hideout");
markerSet(-213, 351, "Escape Rope", itemIcon, "Magma Hideout");
markerSet(-171, 435, "Max Elixir", itemIcon, "Magma Hideout");
markerSet(-170, 428, "Full Restore", itemIcon, "Magma Hideout");
markerSet(-209, 385, "Nugget", itemIcon, "Magma Hideout");
markerSet(-224, 340, "Max Revive", itemIcon, "Magma Hideout");
markerSet(-202, 409, "PP Max", itemIcon, "Magma Hideout");