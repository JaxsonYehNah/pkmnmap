var MtPyre = L.tileLayer('Tilesets/MtPyre/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var MtPyreInfo = L.geoJson(MtPyreVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var MtPyreItemLayer = L.layerGroup();
var MtPyreHiddenItemLayer = L.layerGroup();
var MtPyreEntranceItemLayer = L.layerGroup();

function MtPyref(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();

    map.setView([-48, 100], 5);

    MtPyre.addTo(map);
    MtPyreInfo.addTo(map);
    MtPyreItemLayer.addTo(map);
    MtPyreHiddenItemLayer.addTo(map);
    MtPyreEntranceItemLayer.addTo(map);

    currentMap = "Mt Pyre";

    console.log(e.target.name);
    map.options.minZoom = 5;

    var dif = 20;

    var swview = [(-48 - dif), (97 - dif)];
    var neview = [(-48 + dif), (97 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-238, 414, "Overworld", entrance, "Mt Pyre");
markerSet(-238, 415, "Overworld", entrance, "Mt Pyre");


markerSet(-210, 375, "Max Ether", hitemIcon, "Mt Pyre");
markerSet(-196, 368, "Ultra Ball", hitemIcon, "Mt Pyre");
markerSet(-175, 364, "Zinc", hitemIcon, "Mt Pyre");
markerSet(-157, 392, "Rare Candy", hitemIcon, "Mt Pyre");