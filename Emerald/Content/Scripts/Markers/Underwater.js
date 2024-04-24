var Underwater = L.tileLayer('Tilesets/Underwater/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var UnderwaterInfo = L.geoJson(UnderwaterVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var UnderwaterItemLayer = L.layerGroup();
var UnderwaterHiddenItemLayer = L.layerGroup();
var UnderwaterEntranceItemLayer = L.layerGroup();

var currentMap = "Underwater";

function toggleUnderwater() {
    if (map.hasLayer(Underwater)) {
        map.eachLayer(function(layer) {
            map.removeLayer(layer);
        });

        info.update();
        Overworld.addTo(map);
        OverworldInfo.addTo(map);
        OverworldItemLayer.addTo(map);
        OverworldHiddenItemLayer.addTo(map);
        OverworldBerryItemLayer.addTo(map);
        OverworldEntranceItemLayer.addTo(map);
        console.log("Underwater removed");
    } else {
        if (map.hasLayer(Overworld)) {
            map.eachLayer(function(layer) {
                map.removeLayer(layer);
            });

            info.update();
            Underwater.addTo(map);
            UnderwaterInfo.addTo(map);
            UnderwaterItemLayer.addTo(map);
            UnderwaterHiddenItemLayer.addTo(map);
            UnderwaterEntranceItemLayer.addTo(map);
            console.log("Underwater added");
        }
    }
}

markerSet(-160, 712, "Red Shard", hitemIcon, currentMap);
markerSet(-176, 690, "HP UP", hitemIcon, currentMap);
markerSet(-212, 674, "Heart Scale", hitemIcon, currentMap);
markerSet(-182, 652, "Star Piece", hitemIcon, currentMap);
markerSet(-200, 625, "Big Pearl", hitemIcon, currentMap);
markerSet(-159, 623, "Stardust", hitemIcon, currentMap);
markerSet(-159, 601, "Ultra Ball", hitemIcon, currentMap);
markerSet(-157, 590, "Heart Scale", hitemIcon, currentMap);
markerSet(-175, 572, "Yellow Shard", hitemIcon, currentMap);
markerSet(-176, 570, "Pearl", hitemIcon, currentMap);
markerSet(-179, 571, "Iron", hitemIcon, currentMap);
markerSet(-217, 569, "Blue Shard", hitemIcon, currentMap);
markerSet(-239, 678, "Protein", hitemIcon, currentMap);
markerSet(-238, 709, "Pearl", hitemIcon, currentMap);
markerSet(-114, 624, "Big Pearl", hitemIcon, currentMap);
markerSet(-124, 630, "Heart Scale", hitemIcon, currentMap);
markerSet(-94, 626, "Pearl", hitemIcon, currentMap);
markerSet(-96, 605, "Heart Scale", hitemIcon, currentMap);
markerSet(-65, 602, "Calcium", hitemIcon, currentMap);
markerSet(-100, 574, "Green Shard", hitemIcon, currentMap);
markerSet(-111, 602, "Carbos", hitemIcon, currentMap);