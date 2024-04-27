var NewMauvilleEntrance = L.tileLayer('Tilesets/NewMauvilleEntrance/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var NewMauvilleEntranceInfo = L.geoJson(NewMauvilleEntranceVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var NewMauvilleEntranceItemLayer = L.layerGroup();
var NewMauvilleEntranceHiddenItemLayer = L.layerGroup();
var NewMauvilleBerryItemLayer = L.layerGroup();
var NewMauvilleTMItemLayer = L.layerGroup();
var NewMauvilleEntranceEntranceItemLayer = L.layerGroup();

var currentMap = "New Mauville Entrance";

function NewMauvilleEntrancef(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();

    map.setView([0, 0], 1);

    NewMauvilleEntrance.addTo(map);
    NewMauvilleEntranceInfo.addTo(map);
    NewMauvilleEntranceItemLayer.addTo(map);
    NewMauvilleEntranceHiddenItemLayer.addTo(map);
    NewMauvilleEntranceTMItemLayer.addTo(map);
    NewMauvilleEntranceEntranceItemLayer.addTo(map);

    currentMap = "New Mauville Entrance";

    console.log(e.target.name);
    map.options.minZoom = 0;
    map.options.maxZoom = 1;

    var dif = 20;

    var swview = [(-48 - dif), (97 - dif)];
    var neview = [(-48 + dif), (97 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-238, 414, "Overworld", entrance, currentMap);
markerSet(-238, 415, "Overworld", entrance, currentMap);
markerSet(-238, 415, "New Mauville", entrance, currentMap);