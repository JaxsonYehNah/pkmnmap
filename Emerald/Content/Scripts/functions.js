function disableItems() {
    var elements = document.getElementsByClassName('itemIcon');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.toggle("hidden");
    }
}

function disableHiddenItems() {
    var elements = document.getElementsByClassName('hitemIcon');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.toggle("hidden");
    }
}

function disableBerryItems() {
    var elements = document.getElementsByClassName('berryIcon');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.toggle("hidden");
    }
}

function disableTMItems() {
    var elements = document.getElementsByClassName('tmitemIcon');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.toggle("hidden");
    }
}

function toggleGrid() {
    if (map.hasLayer(Grid)) {
        map.removeLayer(Grid);
        console.log("Grid removed");
    } else {
        map.addLayer(Grid);
        console.log("Grid added");
    }
}

var UnderwaterToggle = 1;

function toggleUnderwater() {
    

    
    if (UnderwaterToggle == 0) {

        map.eachLayer(function(layer) {
            map.removeLayer(layer);
        });
        info.update();

        selectedMap = maps["Overworld"];

        var Overworld = L.tileLayer('Tilesets/' + selectedMap.shortname + '/{z}/{x}/{y}.png', {
            tms: false,
            reuseTiles: true,
            attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
            bounds: bounds,
            tileSize: 256
        }).addTo(map);

        selectedMap?.itemLayer?.addTo(map);
        selectedMap?.hiddenLayer?.addTo(map);
        selectedMap?.berryLayer?.addTo(map);
        selectedMap?.tmLayer?.addTo(map);
        selectedMap?.trainerLayer?.addTo(map);
        selectedMap?.entranceLayer?.addTo(map);
        UnderwaterToggle = 1;
        console.log("Loading Overworld");
    } else {

        
    if((map.getCenter().lng <= 120 && map.getZoom() >= 4) | (map.getCenter().lng <= 100 && map.getZoom() >= 3)) {
        map.setView([map.getCenter().lat, 160], map.getZoom());
    }

        map.eachLayer(function(layer) {
            map.removeLayer(layer);
        });
        info.update();

        selectedMap = maps["Underwater"];

        var Underwater = L.tileLayer('Tilesets/Underwater/{z}/{x}/{y}.png', {
            tms: false,
            reuseTiles: true,
            attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
            bounds: bounds,
            tileSize: 256
        }).addTo(map);

        selectedMap?.itemLayer?.addTo(map);
        selectedMap?.hiddenLayer?.addTo(map);
        selectedMap?.berryLayer?.addTo(map);
        selectedMap?.tmLayer?.addTo(map);
        selectedMap?.trainerLayer?.addTo(map);
        selectedMap?.entranceLayer?.addTo(map);
        UnderwaterToggle = 0;
        console.log("Loading Underwater");
    }
}


var content = document.getElementById("controls");
var swch = 0;

function changeMenu() {
    if (swch == 0) {
        content.style.display = "flex";
        swch = 1;
    } else {
        content.style.display = "none";
        swch = 0;
    }
}

function getCordfromLoc(lat, lng) {

    var tileSize = 0.249990234375;
    var latf = ((lat - 0.5) * tileSize - (tileSize / 2));
    var lngf = ((lng + 0.5) * tileSize + (tileSize / 2));

    return [lngf, latf];
}