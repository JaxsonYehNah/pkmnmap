// Bounds

var tileX = -199.984375;
var tileY = 203.9840625;

var bounds = L.latLngBounds(L.latLng(tileX, 0), L.latLng(0, tileY));
var outOfBoundsInt = 40;
var maxBounds = L.latLngBounds(L.latLng(tileX - outOfBoundsInt, 0 - outOfBoundsInt), L.latLng(0 + outOfBoundsInt, tileY + outOfBoundsInt));

// Map

var map = L.map('map', {
    preferCanvas: true,
    minZoom: 2,
    maxZoom: 6,
    center: [-99.9921875, 101.99203125],
    zoom: 2,
    maxBounds: maxBounds,
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
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:admin@oceanicweb.com.au">email</a>',
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

function pkmnListOutput(str, arr, title, perc) {
    if (arr.length != 0) {
        str = str + '<div class="pkmn-list-row">' + title + '</div>';
        for (var i = 0; i < arr.length; i++) {
            str = str + '' +
                '<div class="pkmn-list-column">' + arr[i].name + '</div>' +
                '<div class="pkmn-list-column">' + arr[i].FireRed + '</div>' +
                '<div class="pkmn-list-column">' + arr[i].area + '</div>' +
                '<div class="pkmn-list-column">' + arr[i].levels + '</div>' +
                '<div class="pkmn-list-column">' + arr[i].rate + perc + '</div>';
        }
    }
    return str;
}

function outpkmn(props) {
    var arr = props.Pokémon;
    var nodata = false;
    var arrayPkmn = [];
    var arrayPkmn2 = [];
    var arrayPkmnlength = [];

    str = '<div id="pkmn-list">';

    str = str +
        '<div class="pkmn-list-column">' +
        'Name' +
        '</div><div class="pkmn-list-column">' +
        'Games' +
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
            var fr;
            var lg;
            if (pk[i].firered) {
                fr = 'firered';
            }
            if (pk[i].leafgreen) {
                lg = 'leafgreen';
            }
            str = str + '' +
                '<div class="pkmn-list-column">' + pk[i].name + '</div>' +
                '<div class="pkmn-list-column-game"><div class="' + fr + '"><p>FR</p></div><div class="' + lg + '"><p>LG</p></div></div>' +
                '<div class="pkmn-list-column">' + pk[i].area + '</div>' +
                '<div class="pkmn-list-column">' + pk[i].levels + '</div>' +
                '<div class="pkmn-list-column">' + pk[i].rate + '</div>';
            fr = '';
            lg = '';
        }
    }

    str = str + '</div>';

    if (arrayPkmn2.length === 0) {
        str = '<div class="pkmn-nodata">No Data Available</div>';
    }

    return str;
}

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

    OverworldInfo.resetStyle(oldtarget); //not sure how tf this works with other Vector layers, but it does
    info.update();

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
    oldtarget = e.target;
}


function onEachFeature(feature, layer) {
    layer.on({
        click: updateFeature,
    });
}

function getCordfromLoc(lat, lng) {

    var tileSize = 0.4999609375;
    var latf = ((lat - 0.5) * tileSize - (tileSize / 2));
    var lngf = ((lng + 0.5) * tileSize + (tileSize / 2));

    return [lngf, latf];
}