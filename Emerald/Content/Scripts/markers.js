// Icons

var itemIcon = L.divIcon({
    className: 'itemIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});

var hiddenIcon = L.divIcon({
    className: 'hitemIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});

var tmIcon = L.divIcon({
    className: 'tmitemIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});

var berryIcon = L.divIcon({
    className: 'berryIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});

var trainerIcon = L.divIcon({
    className: 'trainer',
    iconSize: null,
    popupAnchor: [0, -10]
});

var entranceIcon = L.divIcon({
    className: 'entrance',
    iconSize: null,
    popupAnchor: [0, -10]
});

var currentMap = "Overworld";

var tileSize = 0.249990234375;

function markerSet(lat, lng, description, iconImage, world) {
    latf = lat * tileSize - (tileSize / 2);
    lngf = lng * tileSize + (tileSize / 2);
    var marker = L.marker([latf, lngf], {
        icon: iconImage,
        title: description
    });
    marker.name = description;
    marker.iconImage = iconImage;
    if (Array.isArray(description) == false) {
        marker.bindPopup(description);
    }
    switch (iconImage) {
        case hiddenIcon:
            if (null == maps[world].hiddenLayer) {
                maps[world].hiddenLayer = L.layerGroup();
            }
            maps[world].hiddenLayer.addLayer(marker);
            break;
        case itemIcon:
            if (null == maps[world].itemLayer) {
                maps[world].itemLayer = L.layerGroup();
            }
            maps[world].itemLayer.addLayer(marker);
            break;
        case berryIcon:
            if (null == maps[world].berryLayer) {
                maps[world].berryLayer = L.layerGroup();
            }
            maps[world].berryLayer.addLayer(marker);
            break;
        case tmIcon:
            if (null == maps[world].tmLayer) {
                maps[world].tmLayer = L.layerGroup();
            }
            maps[world].tmLayer.addLayer(marker);
            break;
        case trainerIcon:
            if (null == maps[world].trainerLayer) {
                maps[world].trainerLayer = L.layerGroup();
            }
            maps[world].trainerLayer.addLayer(marker);
            break;
        case entranceIcon:
            if (null == maps[world].entranceLayer) {
                maps[world].entranceLayer = L.layerGroup();
            }
            maps[world].entranceLayer.addLayer(marker);
            break;
        default:
            console.log("Unknown item type specified: " + iconImage)
    }
    marker.on('click', onClickEvent);
}


function onClickEvent(e) {
    console.log(e);
    if (e.target.iconImage.options.className == "entrance") {
        loadMap(e.target.name);
    }
}