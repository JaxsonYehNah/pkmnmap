var JaggedPass = L.tileLayer('Tilesets/JaggedPass/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

var JaggedPassInfo = L.geoJson(JaggedPassVectorData, {
    style: style,
    onEachFeature: onEachFeature
});

var JaggedPassItemLayer = L.layerGroup();
var JaggedPassHiddenItemLayer = L.layerGroup();
var JaggedPassEntranceItemLayer = L.layerGroup();

function JaggedPassf(e) {

    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();
    map.setView([-48, 100], 6);

    JaggedPass.addTo(map);
    JaggedPassInfo.addTo(map);
    JaggedPassItemLayer.addTo(map);
    JaggedPassHiddenItemLayer.addTo(map);
    JaggedPassEntranceItemLayer.addTo(map);

    currentMap = "Jagged Pass";

    console.log(e.target.name);
    map.options.minZoom = 6;

    var dif = 15;

    var swview = [(-48 - dif), (100 - dif)];
    var neview = [(-48 + dif), (100 + dif)];

    map.options.maxBounds = L.latLngBounds(swview, neview);
}

markerSet(-208, 399, "Overworld", entrance, "Jagged Pass");
markerSet(-208, 400, "Overworld", entrance, "Jagged Pass");

markerSet(-172, 398, "Mt Chimney", entrance, "Jagged Pass");
markerSet(-172, 399, "Mt Chimney", entrance, "Jagged Pass");

markerSet(-186, 401, "Magma Hideout", entrance, "Jagged Pass");

markerSet(-178, 393, "Full Heal", hitemIcon, "Jagged Pass");
markerSet(-197, 392, "Great Ball", hitemIcon, "Jagged Pass");