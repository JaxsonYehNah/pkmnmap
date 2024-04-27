var NewMauville = L.tileLayer('Tilesets/NewMauville/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var NewMauvilleInfo = L.geoJson(NewMauvilleVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var NewMauvilleItemLayer = L.layerGroup();
var NewMauvilleHiddenItemLayer = L.layerGroup();
var NewMauvilleBerryItemLayer = L.layerGroup();
var NewMauvilleTMItemLayer = L.layerGroup();
var NewMauvilleEntranceItemLayer = L.layerGroup();

var currentMap = "New Mauville";

function NewMauvillef(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();

    map.setView([-48, 100], 5);

    NewMauville.addTo(map);
    NewMauvilleInfo.addTo(map);
    NewMauvilleItemLayer.addTo(map);
    NewMauvilleHiddenItemLayer.addTo(map);
    NewMauvilleTMItemLayer.addTo(map);
    NewMauvilleEntranceItemLayer.addTo(map);

    currentMap = "New Mauville";

    console.log(e.target.name);
    map.options.minZoom = 5;

    var dif = 20;

    var swview = [(-48 - dif), (97 - dif)];
    var neview = [(-48 + dif), (97 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-238, 414, "Overworld", entrance, currentMap);
markerSet(-238, 415, "Overworld", entrance, currentMap);


markerSet(-210, 375, "Max Ether", hitemIcon, currentMap);
markerSet(-196, 368, "Ultra Ball", hitemIcon, currentMap);
markerSet(-175, 364, "Zinc", hitemIcon, currentMap);
markerSet(-157, 392, "Rare Candy", hitemIcon, currentMap);