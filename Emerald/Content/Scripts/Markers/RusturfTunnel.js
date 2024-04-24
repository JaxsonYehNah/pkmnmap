var RusturfTunnel = L.tileLayer('Tilesets/RusturfTunnel/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var RusturfTunnelInfo = L.geoJson(RusturfTunnelVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var RusturfTunnelItemLayer = L.layerGroup();
var RusturfTunnelHiddenItemLayer = L.layerGroup();
var RusturfTunnelEntranceItemLayer = L.layerGroup();

var currentMap = "Rusturf Tunnel";

function RusturfTunnelf(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();

    map.setView([-48, 100], 6);

    RusturfTunnel.addTo(map);
    RusturfTunnelInfo.addTo(map);
    RusturfTunnelItemLayer.addTo(map);
    RusturfTunnelHiddenItemLayer.addTo(map);
    RusturfTunnelEntranceItemLayer.addTo(map);
    currentMap = "Rusturf Tunnel";


    console.log(e.target.name);
    map.options.minZoom = 6;

    var dif = 10;

    var swview = [(-48 - dif), (100 - dif)];
    var neview = [(-48 + dif), (100 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-191, 386, "Overworld", entrance, currentMap);
markerSet(-201, 400, "Overworld", entrance, currentMap);
markerSet(-197, 411, "Overworld", entrance, currentMap);


markerSet(-181, 385, "Pokeball", itemIcon, currentMap);
markerSet(-182, 412, "Max Ether", itemIcon, currentMap);