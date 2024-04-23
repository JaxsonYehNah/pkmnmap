var SafariZone = L.tileLayer('Tilesets/SafariZone/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:admin@oceanicweb.com.au">email</a>',
    bounds: bounds,
    tileSize: 256
});

var SafariZoneInfo = L.geoJson(SafariZoneVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var SafariZoneItemLayer = L.layerGroup();
var SafariZoneHiddenItemLayer = L.layerGroup();
var SafariZoneEntranceItemLayer = L.layerGroup();

var currentMap = "Safari Zone";

function SafariZonef(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();

    map.setView([-48, 100], 5);

    SafariZone.addTo(map);
    SafariZoneInfo.addTo(map);
    SafariZoneItemLayer.addTo(map);
    SafariZoneHiddenItemLayer.addTo(map);
    SafariZoneEntranceItemLayer.addTo(map);
    currentMap = "Safari Zone";


    console.log(e.target.name);
    map.options.minZoom = 5;

    var dif = 20;

    var swview = [(-48 - dif), (100 - dif)];
    var neview = [(-48 + dif), (100 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-225, 412, "Overworld", entrance, currentMap);

//Zone 6
markerSet(-157, 441, "Zinc", hitemIcon, currentMap);
markerSet(-187, 451, "Rare Candy", hitemIcon, currentMap);
markerSet(-169, 428, "Nugget", itemIcon, currentMap);

//Zone 5
markerSet(-225, 452, "Full Restore", hitemIcon, currentMap);
markerSet(-228, 439, "PP UP", hitemIcon, currentMap);
markerSet(-207, 451, "Big Pearl", itemIcon, currentMap);

//Zone 4
markerSet(-158, 387, "Calcium", itemIcon, currentMap);

//Zone 3
markerSet(-159, 373, "TM22 (SolarBeam)", itemIcon, currentMap);

//Zone 2
markerSet(-229, 340, "Protein", hitemIcon, currentMap);