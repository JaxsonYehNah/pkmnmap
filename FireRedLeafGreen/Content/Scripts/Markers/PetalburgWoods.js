var PetalburgWoods = L.tileLayer('Tilesets/PetalburgWoods/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var PetalburgWoodsInfo = L.geoJson(PetalburgWoodsVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var PetalburgWoodsItemLayer = L.layerGroup();
var PetalburgWoodsHiddenItemLayer = L.layerGroup();
var PetalburgWoodsEntranceItemLayer = L.layerGroup();

function PetalburgWoodsf(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();
    map.setView([-48, 100], 5);

    PetalburgWoods.addTo(map);
    PetalburgWoodsInfo.addTo(map);
    PetalburgWoodsItemLayer.addTo(map);
    PetalburgWoodsHiddenItemLayer.addTo(map);
    PetalburgWoodsEntranceItemLayer.addTo(map);

    currentMap = "Petalburg Woods";

    console.log(e.target.name);
    map.options.minZoom = 5;

    var dif = 15;

    var swview = [(-48 - dif), (100 - dif)];
    var neview = [(-48 + dif), (100 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-175, 389, "Overworld", entrance, "Petalburg Woods");
markerSet(-175, 390, "Overworld", entrance, "Petalburg Woods");

markerSet(-208, 391, "Overworld", entrance, "Petalburg Woods");
markerSet(-208, 392, "Overworld", entrance, "Petalburg Woods");

markerSet(-208, 411, "Overworld", entrance, "Petalburg Woods");
markerSet(-208, 412, "Overworld", entrance, "Petalburg Woods");



markerSet(-205, 414, "Potion", hitemIcon, "Petalburg Woods");
markerSet(-196, 379, "Parlyz Heal", itemIcon, "Petalburg Woods");
markerSet(-190, 410, "Great Ball", itemIcon, "Petalburg Woods");
markerSet(-176, 401, "Tiny Mushroom", hitemIcon, "Petalburg Woods");
markerSet(-199, 415, "Tiny Mushroom", hitemIcon, "Petalburg Woods");
markerSet(-175, 408, "Miracle Seed", itemIcon, "Petalburg Woods");
markerSet(-189, 379, "Pokeball", hitemIcon, "Petalburg Woods");

markerSet(-190, 410, "X Attack", itemIcon, "Petalburg Woods");
markerSet(-178, 379, "Ether", itemIcon, "Petalburg Woods");