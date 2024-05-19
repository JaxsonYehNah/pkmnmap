var tileX = -95.7421875;
var tileY = 199.9921875;
var bounds = L.latLngBounds(L.latLng(tileX, 0), L.latLng(0, tileY));
const outOfBoundsInt = 20;
var oldtarget;

var map = L.map('map', {
    preferCanvas: true,
    maxBoundsViscosity: 1.0,
    doubleClickZoom: false,
    crs: L.CRS.Simple,
    detectRetina: true,
    markerZoomAnimation: true,
    zoomControl: false
});

new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

var LocationArray = [];

// Grid Layer

var Grid = L.tileLayer('Tilesets/Grid/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
    bounds: bounds,
    tileSize: 256
});

//Location Information Mains

var info = L.control({ position: 'bottomleft' });
info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};
info.update = function(props) {
    this._div.innerHTML =
        (props ?
            '<div class="info-header">' +
            '<h4>' + props.name + '</h4>' +
            '<button onclick="info.update()">close</button>' +
            '</div>' +

            outpkmn(props)

            :
            'Click on a location');
};
info.addTo(map);




map.on('click', function(e) {
    var coord = e.latlng;
    var lat = Math.floor((coord.lat / tileSize) + 1);
    var lng = Math.floor(coord.lng / tileSize);
    console.log("Tile Location: " + lat + ", " + lng);
    console.log("Map Location: " + Math.floor(lat * tileSize) + ", " + Math.floor(lng * tileSize));
});




loadMap("Overworld");

function loadMap(mapName) {
    currentMap = mapName;
    // remove all existing layers from the map
    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });
    // clear the pokemon info box
    info.update();

    // set viewport options
    selectedMap = maps[mapName];
    map.options.minZoom = selectedMap.minZoom;
    map.options.maxZoom = selectedMap.maxZoom;

    if (mapName == "Overworld") {
        var swview = L.latLng(selectedMap.bounds[0] - selectedMap.boundsDif, 0 - selectedMap.boundsDif);
        var neview = L.latLng(0 + selectedMap.boundsDif, selectedMap.bounds[1] + selectedMap.boundsDif);
    } else if(mapName == "Underwater") {
        var swview = L.latLng(selectedMap.bounds[0] - selectedMap.boundsDif, 0 - selectedMap.boundsDif);
        var neview = L.latLng(0 + selectedMap.boundsDif, selectedMap.bounds[1] + selectedMap.boundsDif);
    } else {
        var swview = [(selectedMap.bounds[0] - selectedMap.boundsDif), (selectedMap.bounds[1] - selectedMap.boundsDif)];
        var neview = [(selectedMap.bounds[0] + selectedMap.boundsDif), (selectedMap.bounds[1] + selectedMap.boundsDif)];
    }
    map.options.maxBounds = L.latLngBounds(swview, neview);
    // create tile and vector layers
    var tileLayer = L.tileLayer('Tilesets/' + selectedMap.shortname + '/{z}/{x}/{y}.png', {
        tms: false,
        reuseTiles: true,
        attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:jaxsonkeenes@gmail.com">email</a>',
        bounds: L.latLngBounds(L.latLng(tileX, 0), L.latLng(0, tileY)),
        tileSize: 256
    }).addTo(map);
    var vectorLayer = L.geoJson(selectedMap.vector, {
        style: style,
        onEachFeature: onEachFeature
    });
    console.log(mapName);
    // add layers to map
    vectorLayer.addTo(map);
    selectedMap?.itemLayer?.addTo(map);
    selectedMap?.hiddenLayer?.addTo(map);
    selectedMap?.berryLayer?.addTo(map);
    selectedMap?.tmLayer?.addTo(map);
    selectedMap?.trainerLayer?.addTo(map);
    selectedMap?.entranceLayer?.addTo(map);
    map.setView([selectedMap.bounds[0], selectedMap.bounds[1]], selectedMap.minZoom);
}



// Outputs list for selected route

function outpkmn(props) {
    var arr = props.Pokémon;
    var nodata = false;
    var arrayPkmn = [];
    var arrayPkmn2 = [];
    var arrayPkmnlength = [];

    str = '<div id="pkmn-list">';

    str = str +
        '<div class="pkmn-list-column">' +
        'Icon' +
        '</div><div class="pkmn-list-column">' +
        'Name' +
        '</div><div class="pkmn-list-column">' +
        'Method' +
        '</div><div class="pkmn-list-column">' +
        'Levels' +
        '</div><div class="pkmn-list-column">' +
        'Rate' +
        '</div>';


    for (const [key, value] of Object.entries(arr)) {
        arrayPkmn[key] = value;
        arrayPkmn2.push(key);
        arrayPkmnlength++;
    }

    for (var ia = 0; ia < arrayPkmnlength; ia++) {
        var pk = [];
        arr2 = arr[arrayPkmn[ia]];
        str = str + '<div class="pkmn-list-row">' + arrayPkmn2[ia] + '</div>';
        for (const [key, value] of Object.entries(arrayPkmn[arrayPkmn2[ia]])) {
            pk[key] = value;
        }
        for (var i = 0; i < (pk.length); i++) {
            str = str + '' +
                '<div class="pkmn-list-column"><img src=\"../Sprites/' + pk[i].name + '.png\"></div>' +
                '<div class="pkmn-list-column">' + pk[i].name + '</div>' +
                '<div class="pkmn-list-column">' + pk[i].area + '</div>' +
                '<div class="pkmn-list-column">' + pk[i].levels + '</div>' +
                '<div class="pkmn-list-column">' + pk[i].rate + '</div>';
        }
    }

    str = str + '</div>';

    if (arrayPkmn2.length === 0) {
        str = '<div class="pkmn-nodata">No Data Available</div>';
    }

    return str;
}

function style(feature) {
    return {
        weight: 1,
        opacity: 0,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0
    };
}

function updateFeature(e) {
    // if something's already been clicked, set style so it looks unclicked
    if (null != oldtarget) {
        oldtarget.setStyle({ opacity: 0 });
    }
    // update infobox, set style
    var layer = e.target;
    info.update(layer.feature.properties);
    layer.setStyle({
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    // remember this for next time
    oldtarget = e.target;
}

function onEachFeature(feature, layer) {
    layer.on({
        click: updateFeature,
    });
}


const COOKIE_NAME = 'ItemList';
const COOKIE_EXPIRY_DAYS = 30; // Number of days before the cookie expires

// Function for Vector Map Locations

// Helper function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Helper function to get a cookie by name
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Helper function to delete a cookie
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Function to get the array from the cookie
function getArrayFromCookie() {
    let cookie = getCookie(COOKIE_NAME);
    if (cookie) {
        return JSON.parse(cookie);
    }
    return [];
}

// Function to save the array to the cookie
function saveArrayToCookie(arr) {
    setCookie(COOKIE_NAME, JSON.stringify(arr), COOKIE_EXPIRY_DAYS);
}

// Function to add an item to the array in the cookie
function addItemToArray(item) {
    let arr = getArrayFromCookie();
    arr.push(item);
    saveArrayToCookie(arr);
}

// Function to remove an item from the array in the cookie
function removeItemFromArray(item) {
    let arr = getArrayFromCookie();
    arr = arr.filter(i => i !== item);
    saveArrayToCookie(arr);
}