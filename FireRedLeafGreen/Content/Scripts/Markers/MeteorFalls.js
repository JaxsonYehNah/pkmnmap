var MeteorFalls = L.tileLayer('Tilesets/MeteorFalls/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:admin@oceanicweb.com.au">email</a>',
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

function MeteorFallsf(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();
    map.setView([-47.65625, 95.890625], 5);

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

markerSet(-190, 396, "Overworld", entrance, "Meteor Falls");
markerSet(-211, 375, "Overworld", entrance, "Meteor Falls");