// Map

var Overworld = L.tileLayer('Tilesets/Overworld/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
}).addTo(map);

// Info

var oldtarget;

var OverworldInfo = L.geoJson(OverworldVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

// Markers

var OverworldItemLayer = L.layerGroup();
var OverworldHiddenItemLayer = L.layerGroup();
var OverworldEntranceItemLayer = L.layerGroup();

OverworldItemLayer.addTo(map);
OverworldHiddenItemLayer.addTo(map);
OverworldEntranceItemLayer.addTo(map);
OverworldInfo.addTo(map);

function OverworldMarkerSet(lat, lng, description, iconimage, world) {

    latf = lat * tileSize - (tileSize / 2);
    lngf = lng * tileSize + (tileSize / 2);
    var OverworldMarker = L.marker([latf, lngf], {
        icon: iconimage,
        title: description
    });

    OverworldMarker.name = description;
    OverworldMarker.iconimage = iconimage;
    OverworldMarker.bindPopup(description);

    if (iconimage == hitemIcon) {
        OverworldHiddenItemLayer.addLayer(OverworldMarker);
    } else if (iconimage == itemIcon) {
        OverworldItemLayer.addLayer(OverworldMarker);
    } else if (iconimage == entrance) {
        OverworldEntranceItemLayer.addLayer(OverworldMarker);
    }

    if (iconimage == entrance) {
        locarray = [{
            description: {
                "lat": latf,
                "lng": lngf
            }
        }];
        LocationArray = LocationArray.concat(locarray);
    }

    OverworldMarker.on('click', OverworldMarkerClick);
}

function OverworldMarkerClick(e) {
    Overworldf(e);
}

function Overworldf(e) {
    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();


    map.options.maxBounds = maxBounds;
    if (currentMap == "Fiery Path") {
        map.setView([-10.65625, 43.71875], 5);
    } else if (currentMap == "Granite Cave") {
        map.setView([-89.7109375, 12.1875], 5);
    } else if (currentMap == "Jagged Pass") {
        map.setView([-10.65625, 43.71875], 5);
    } else if (currentMap == "Mt Chimney") {
        map.setView([-10.65625, 43.71875], 5);
    } else if (currentMap == "Petalburg Woods") {
        map.setView([-53.9921875, 5.8125], 5);
    } else if (currentMap == "Rusturf Tunnel") {
        map.setView([-32.3125, 26.609375], 5);
    } else if (currentMap == "Victory Road") {
        map.setView([-54.640625, 194.578125], 5);
    } else if (currentMap == "Mt Pyre") {
        map.setView([-29.25, 109.5625], 5);
    } else if (currentMap == "Meteor Falls") {
        map.setView([-16.46875, 10.03125], 5);
    } else if (currentMap == "Sootopolis") {
        map.setView([-46.4, 150.75], 5);
    }

    Overworld.addTo(map);
    OverworldItemLayer.addTo(map);
    OverworldHiddenItemLayer.addTo(map);
    OverworldEntranceItemLayer.addTo(map);
    OverworldInfo.addTo(map);
    map.options.minZoom = 2;
}

//Marker Locations
/*
markerSet(-220, 10.5, "Petalburg Woods", entrance, "Overworld");
markerSet(-224, 32.5, "Petalburg Woods", entrance, "Overworld");
markerSet(-212, 10.5, "Petalburg Woods", entrance, "Overworld");

markerSet(-221, 778, "Victory Road", entrance, "Overworld");
markerSet(-207, 778, "Victory Road", entrance, "Overworld");

markerSet(-129, 87, "Rusturf Tunnel", entrance, "Overworld");
markerSet(-131, 105, "Rusturf Tunnel", entrance, "Overworld");
markerSet(-142, 128, "Rusturf Tunnel", entrance, "Overworld");

markerSet(-358, 48, "Granite Cave", entrance, "Overworld");

markerSet(-56, 171, "Fiery Path", entrance, "Overworld");
markerSet(-30, 182, "Fiery Path", entrance, "Overworld");

markerSet(-47, 188.5, "Mt Chimney", entrance, "Overworld");

markerSet(-66, 166.5, "Jagged Pass", entrance, "Overworld");

markerSet(-63, 48, "Meteor Falls", entrance, "Overworld");
markerSet(-79, 27, "Meteor Falls", entrance, "Overworld");

markerSet(-129, 442, "Mt Pyre", entrance, "Overworld");

markerSet(-185.5, 602.5, "Sootopolis", entrance, "Overworld");
*/
//Hidden Items
//credit https://www.youtube.com/user/Reksguitarvideos9/videos

markerSet(-63, 54, "Pokeball", hitemIcon, "Overworld");
markerSet(-79, 122, "Oran Berry", hitemIcon, "Overworld");
markerSet(-54, 161, "Persim Berry", hitemIcon, "Overworld");
markerSet(-52, 199, "Great Ball", hitemIcon, "Overworld");
markerSet(-67, 223, "Razz Berry", hitemIcon, "Overworld");
markerSet(-47, 282, "Rare Candy", hitemIcon, "Overworld");
markerSet(-2, 314, "Elixir", hitemIcon, "Overworld");
markerSet(-4, 295, "Pecha Berry", hitemIcon, "Overworld");
markerSet(-8, 333, "Oran Berry", hitemIcon, "Overworld");
markerSet(-3, 340, "Bulk Berry", hitemIcon, "Overworld");
markerSet(-6, 358, "Ether", hitemIcon, "Overworld");
markerSet(-165, 295, "Rare Candy", hitemIcon, "Overworld");
markerSet(-165, 281, "Sitrus Berry", hitemIcon, "Overworld");
markerSet(-211, 278, "Max Ether", hitemIcon, "Overworld");
markerSet(-215, 370, "Escape Rope", hitemIcon, "Overworld");
markerSet(-57, 327, "Ether", hitemIcon, "Overworld");
markerSet(-52, 360, "Chesto Berry", hitemIcon, "Overworld");
markerSet(-52, 375, "Rare Candy", hitemIcon, "Overworld");
markerSet(-79, 401, "Persim Berry", hitemIcon, "Overworld");
markerSet(-76, 390, "Cherri Berry", hitemIcon, "Overworld");
markerSet(-69, 394, "Super Potion", hitemIcon, "Overworld");
markerSet(-107, 404, "Nanab Berry", hitemIcon, "Overworld");
markerSet(-90, 396, "Max Ether", hitemIcon, "Overworld");
markerSet(-145, 354, "Leppa Berry", hitemIcon, "Overworld");
markerSet(-140, 354, "Rawst Berry", hitemIcon, "Overworld");
markerSet(-141, 350, "Lum Berry", hitemIcon, "Overworld");
markerSet(-145, 256, "Wepear Berry", hitemIcon, "Overworld");
markerSet(-140, 235, "PP UP", hitemIcon, "Overworld");
markerSet(-143, 163, "Leftovers", hitemIcon, "Overworld");
markerSet(-218, 136, "PP UP", hitemIcon, "Overworld");
markerSet(-203, 142, "Full Restore", hitemIcon, "Overworld");
markerSet(-233, 150, "Rare Candy", hitemIcon, "Overworld");
markerSet(-247, 136, "Max Revive", hitemIcon, "Overworld");
markerSet(-307, 146, "Max Elixir", hitemIcon, "Overworld");
markerSet(-326, 225, "Max Revive", hitemIcon, "Overworld");
markerSet(-207, 402, "Hyper Potion", hitemIcon, "Overworld");
markerSet(-220, 398, "Leftovers", hitemIcon, "Overworld");
markerSet(-266, 393, "Rare Candy", hitemIcon, "Overworld");
markerSet(-284, 359, "PP UP", hitemIcon, "Overworld");
markerSet(-323, 331, "Pinap Berry", hitemIcon, "Overworld");
markerSet(-290, 321, "Zinc", hitemIcon, "Overworld");
markerSet(-386, 107, "Stardust", hitemIcon, "Overworld");
markerSet(-322, 77, "Pearl", hitemIcon, "Overworld");
markerSet(-158, 3, "Leppa Berry", hitemIcon, "Overworld");
markerSet(-131, 11, "Max Ether", hitemIcon, "Overworld");
markerSet(-102, 20, "Ultra Ball", hitemIcon, "Overworld");
markerSet(-97, 10, "Aspear Berry", hitemIcon, "Overworld");
markerSet(-72, 19, "Full Restore", hitemIcon, "Overworld");
markerSet(-59, 2, "Sitrus Berry", hitemIcon, "Overworld");
markerSet(-48, 3, "Lum Berry", hitemIcon, "Overworld");
markerSet(-38, 9, "Max Elixir", hitemIcon, "Overworld");


markerSet(-186, 402, "TM48(Skill Swap)", itemIcon, "Overworld");
markerSet(-185, 65, "Potion", itemIcon, "Overworld");
markerSet(-154, 77, "Ether", itemIcon, "Overworld");
markerSet(-164, 77, "Parlyz Heal", itemIcon, "Overworld");
markerSet(-55, 223, "TM05(Roar)", itemIcon, "Overworld");
markerSet(-4, 287, "TM45(Attract)", itemIcon, "Overworld");
markerSet(-2, 326, "TM43(Secret Power)", itemIcon, "Overworld");
markerSet(-67, 324, "TM40(Aerial Ace)", itemIcon, "Overworld");
markerSet(-67, 377, "Burn Heal", itemIcon, "Overworld");
markerSet(-123, 185, "Ether", itemIcon, "Overworld");