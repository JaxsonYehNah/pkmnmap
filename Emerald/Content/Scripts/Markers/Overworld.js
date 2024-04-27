// Map

var Overworld = L.tileLayer('Tilesets/OverworldTrainers/{z}/{x}/{y}.png', {
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
var OverworldBerryItemLayer = L.layerGroup();
var OverworldTMItemLayer = L.layerGroup();
var OverworldEntranceItemLayer = L.layerGroup();
var OverworldTrainerLayer = L.layerGroup();

OverworldItemLayer.addTo(map);
OverworldHiddenItemLayer.addTo(map);
OverworldBerryItemLayer.addTo(map);
OverworldTMItemLayer.addTo(map);
OverworldEntranceItemLayer.addTo(map);
OverworldTrainerLayer.addTo(map);
OverworldInfo.addTo(map);

var currentMap = "Overworld";

function Overworldf(e) {
    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    info.update();

    // map location, zoom !!not tile location

    map.options.maxBounds = maxBounds;
    if (currentMap == "Fiery Path")
        map.setView([-11, 43], 10);
    if (currentMap == "Granite Cave")
        map.setView([-90, 11], 10);
    if (currentMap == "Jagged Pass")
        map.setView([-17, 41], 10);
    if (currentMap == "Meteor Falls")
        map.setView([-15, 7], 10);
    if (currentMap == "Mt Chimney")
        map.setView([-11, 43], 10);
    if (currentMap == "Mt Pyre")
        map.setView([-30, 109], 10);
    if (currentMap == "New Mauville Entrance")
        map.setView([0, 0], 10);
    if (currentMap == "New Mauville")
        map.setView([0, 0], 10);
    if (currentMap == "Petalburg Woods")
        map.setView([-55, 4], 10);
    if (currentMap == "Rusturf Tunnel")
        map.setView([-33, 27], 10);
    if (currentMap == "Safari Zone")
        map.setView([-22, 109], 10);
    if (currentMap == "Sootopolis")
        map.setView([-47, 150], 10);
    if (currentMap == "Victory Road")
        map.setView([-54, 194], 10);
    if (currentMap == "Meteor Falls")
        map.setView([-17, 8], 10);
    if (currentMap == "Aqua Hideout")
        map.setView([-19, 137], 10);
    console.log('Exiting ' + currentMap);


    Overworld.addTo(map);
    OverworldItemLayer.addTo(map);
    OverworldHiddenItemLayer.addTo(map);
    OverworldBerryItemLayer.addTo(map);
    OverworldTMItemLayer.addTo(map);
    OverworldEntranceItemLayer.addTo(map);
    OverworldTrainerLayer.addTo(map);
    OverworldInfo.addTo(map);
    map.options.minZoom = 2;
}

//Marker Locations

markerSet(-220, 10.5, "Petalburg Woods", entrance, currentMap);
markerSet(-224, 32.5, "Petalburg Woods", entrance, currentMap);
markerSet(-212, 10.5, "Petalburg Woods", entrance, currentMap);

markerSet(-221, 778, "Victory Road", entrance, currentMap);
markerSet(-207, 778, "Victory Road", entrance, currentMap);

markerSet(-129, 87, "Rusturf Tunnel", entrance, currentMap);
markerSet(-131, 105, "Rusturf Tunnel", entrance, currentMap);
markerSet(-142, 128, "Rusturf Tunnel", entrance, currentMap);

markerSet(-358, 48, "Granite Cave", entrance, currentMap);

markerSet(-56, 171, "Fiery Path", entrance, currentMap);
markerSet(-30, 182, "Fiery Path", entrance, currentMap);

markerSet(-47, 188.5, "Mt Chimney", entrance, currentMap);

markerSet(-66, 166.5, "Jagged Pass", entrance, currentMap);

markerSet(-63, 48, "Meteor Falls", entrance, currentMap);
markerSet(-79, 27, "Meteor Falls", entrance, currentMap);

markerSet(-129, 442, "Mt Pyre", entrance, currentMap);

markerSet(-184, 235, "New Mauville Entrance", entrance, currentMap);

markerSet(-185.5, 602.5, "Sootopolis", entrance, currentMap);

markerSet(-85, 437, "Safari Zone", entrance, currentMap);

markerSet(-75, 550, "Aqua Hideout", entrance, currentMap);

//
//Trainers
//

//Route 102

markerSet(-256, 103, ["Youngster Calvin", "Poochyena Lv.5", "", "", "", "", "", "$80"], trainerIcon, currentMap);
markerSet(-257, 95, ["Bug Catcher Rick", "Wurmple Lv.4", "Wurmple Lv.4", "", "", "", "", "$64"], trainerIcon, currentMap);
markerSet(-246, 89, ["Youngster Allen", "Zigzagoon Lv .4", "Taillow Lv .3", "", "", "", "", "$48"], trainerIcon, currentMap);
markerSet(-249, 78, ["Lass Tiana", "Zigzagoon Lv .4", "Shroomish Lv .4", "", "", "", "", "$64"], trainerIcon, currentMap);

//Route 103

markerSet(-226, 156, ["Swimmer Isabelle", "Marill Lv.15", "", "", "", "", "", "$120"], trainerIcon, currentMap);
markerSet(-233, 156, ["Swimmer♂ Pete", "Tentacool Lv.15", "", "", "", "", "", "$120"], trainerIcon, currentMap);
markerSet(-231, 191, ["Aroma Lady Daisy", "Shroomish Lv.14", "Roselia Lv.14", "", "", "", "", "$560"], trainerIcon, currentMap);
markerSet(-232, 184.5, ["Twins Amy & Liv", "Plusle Lv.15", "Minum Lv.15", "", "", "", "", "$360"], trainerIcon, currentMap);
markerSet(-233, 176, ["Pokéfan Miguel", "Skitty Lv.5", "", "", "", "", "", "$1200"], trainerIcon, currentMap);
markerSet(-228, 170, ["Fisherman Andrew", "Magikarp Lv.5", "Tentacool Lv.10", "Magikarp Lv.15", "", "", "", "$600"], trainerIcon, currentMap);
markerSet(-225, 187, ["Black Belt Rhett", "Makuhita Lv.5", "", "", "", "", "", "$480"], trainerIcon, currentMap);
markerSet(-229, 187, ["Guitarist Marcos", "Voltorb Lv.5", "", "", "", "", "", "$480"], trainerIcon, currentMap);

//Route 104

markerSet(-249, 18, ["Youngster Billy", "Zigzagoon Lv.5", "Seedot Lv.7", "", "", "", "", "$112"], trainerIcon, currentMap);
markerSet(-241, 15, ["Fisherman Darian", "Magikarp Lv.9", "", "", "", "", "", "$360"], trainerIcon, currentMap);
markerSet(-226, 11, ["Lady Cindy", "Zigzagoon Lv.7", "", "", "", "", "", "$1400"], trainerIcon, currentMap);
markerSet(-207, 21, ["Rich Boy Winston", "Zigzagoon Lv.7", "", "", "", "", "", "$1400"], trainerIcon, currentMap);
markerSet(-206, 31, ["Lass Haley", "Lotad Lv.6", "Shroomish Lv.6", "", "", "", "", "$96"], trainerIcon, currentMap);
markerSet(-197, 27.5, ["Twins Gina & Mia", "Seedot Lv.6", "Lotad Lv.6", "", "", "", "", "", "$144"], trainerIcon, currentMap);
markerSet(-190, 29, ["Fisherman Ivan", "Magikarp Lv.5", "Magikarp Lv.6", "Magikarp Lv.7", "", "", "", "$280"], trainerIcon, currentMap);

//Route 105

markerSet(-271, 19, ["Swimmer Imani", "Marill Lv.26", "", "", "", "", "", "$208"], trainerIcon, currentMap);
markerSet(-298, 27, ["Swimmer Dominik", "Tentacool Lv.26", "", "", "", "", "", "$208"], trainerIcon, currentMap);
markerSet(-310, 17, ["Ruin Maniac Foster", "Sandslash Lv.25", "Sandslash Lv.25", "", "", "", "", "$1500"], trainerIcon, currentMap);
markerSet(-307, 8, ["Swimmer Beverly", "Wingull Lv.25", "Wailmer Lv.25", "", "", "", "", "$200"], trainerIcon, currentMap);
markerSet(-320, 4, ["Ruin Maniac Andres", "Sandshrew Lv.25", "Sandshrew Lv.25", "", "", "", "", "$1500"], trainerIcon, currentMap);
markerSet(-316, 4, ["Bird Keeper Josue", "Taillow Lv.25", "Wingull Lv.25", "", "", "", "", "$800"], trainerIcon, currentMap);
markerSet(-322, 19, ["Swimmer Luis", "Carvanha Lv.26", "", "", "", "", "", "$208"], trainerIcon, currentMap);



//Hidden Items
//credit https://www.youtube.com/user/Reksguitarvideos9/videos

markerSet(-261, 51, "Rare Candy", hitemIcon, currentMap);
markerSet(-254, 16, "Antidote", hitemIcon, currentMap);
markerSet(-246, 16, "Heart Scale", hitemIcon, currentMap);
markerSet(-237, 14, "Potion", hitemIcon, currentMap);
markerSet(-191, 3, "Pokeball", hitemIcon, currentMap);
markerSet(-188, 7, "Super Potion", hitemIcon, currentMap);
markerSet(-130, 62, "Super Potion", hitemIcon, currentMap);
markerSet(-318, 5, "Big Pearl", hitemIcon, currentMap);
markerSet(-330, 15, "Heart Scale", hitemIcon, currentMap);
markerSet(-357, 68, "Heart Scale", hitemIcon, currentMap);
markerSet(-354, 53, "Stardust", hitemIcon, currentMap);
markerSet(-353, 41, "Pokeball", hitemIcon, currentMap);
markerSet(-362, 208, "Heart Scale", hitemIcon, currentMap);
markerSet(-343, 216, "Revive", hitemIcon, currentMap);
markerSet(-336, 213, "Heart Scale", hitemIcon, currentMap);
markerSet(-330, 209, "Great Ball", hitemIcon, currentMap);
markerSet(-340, 228, "Ether", hitemIcon, currentMap);
markerSet(-325, 233, "Heart Scale", hitemIcon, currentMap);
markerSet(-227, 237, "Full Heal", hitemIcon, currentMap);
markerSet(-134, 110, "Blackglasses", hitemIcon, currentMap);
markerSet(-199, 235, "Revive", hitemIcon, currentMap);
markerSet(-205, 233, "Great Ball", hitemIcon, currentMap);
markerSet(-195, 204, "Pokeball", hitemIcon, currentMap);
markerSet(-159, 143, "Repel", hitemIcon, currentMap);
markerSet(-5, 122, "TM32 (Double Team)", tmitemIcon, currentMap);
markerSet(-3, 173, "Nugget", hitemIcon, currentMap);
markerSet(-15, 82, "Nugget", hitemIcon, currentMap);
markerSet(-30, 47, "Revive", hitemIcon, currentMap);
markerSet(-57, 60, "Carbos", hitemIcon, currentMap);
markerSet(-91, 15, "Heart Scale", hitemIcon, currentMap);
markerSet(-65, 144, "Ice Heal", hitemIcon, currentMap);
markerSet(-55, 219, "Protein", hitemIcon, currentMap);
markerSet(-70, 226, "Stardust", hitemIcon, currentMap);
markerSet(-66, 235, "Rare Candy", hitemIcon, currentMap);
markerSet(-374, 178, "Rare Candy", hitemIcon, currentMap);
markerSet(-154, 252, "Heart Scale", hitemIcon, currentMap);
markerSet(-153, 271, "Iron", hitemIcon, currentMap);
markerSet(-120, 306, "Full Heal", hitemIcon, currentMap);
markerSet(-82, 297, "Calcium", hitemIcon, currentMap);
markerSet(-63, 318, "Ultra Ball", hitemIcon, currentMap);
markerSet(-29, 300, "Max Ether", hitemIcon, currentMap);
markerSet(-1, 369, "Rare Candy", hitemIcon, currentMap);
markerSet(-11, 391, "Revive", hitemIcon, currentMap);
markerSet(-42, 384, "Zinc", hitemIcon, currentMap);
markerSet(-86, 360, "Rare Candy", hitemIcon, currentMap);
markerSet(-88, 468, "Max Revive", hitemIcon, currentMap);
markerSet(-85, 472, "Full Heal", hitemIcon, currentMap);
markerSet(-83, 458, "Nugget", hitemIcon, currentMap);
markerSet(-90, 423, "HP UP", hitemIcon, currentMap);
markerSet(-101, 516, "Heart Scale", hitemIcon, currentMap);
markerSet(-101, 544, "Pokeball", hitemIcon, currentMap);
markerSet(-77, 541, "PP UP", hitemIcon, currentMap);
markerSet(-155, 459, "PP UP", hitemIcon, currentMap);
markerSet(-158, 458, "Rare Candy", hitemIcon, currentMap);
markerSet(-155, 411, "Hyper Potion", hitemIcon, currentMap);
markerSet(-141, 395, "Super Repel", hitemIcon, currentMap);
markerSet(-141, 332, "Revive", hitemIcon, currentMap);
markerSet(-241, 697, "Heart Scale", hitemIcon, currentMap);
markerSet(-229, 689, "Heart Scale", hitemIcon, currentMap);
markerSet(-253, 671, "Heart Scale", hitemIcon, currentMap);



markerSet(-257, 81, "Potion", itemIcon, currentMap);
markerSet(-260, 43, "Ether", itemIcon, currentMap);
markerSet(-173, 36, "X Defend", itemIcon, currentMap);
markerSet(-127, 59, "Ether", itemIcon, currentMap);
markerSet(-128, 74, "Potion", itemIcon, currentMap);
markerSet(-133, 95, "X Special", itemIcon, currentMap);
markerSet(-138, 50, "Repel", itemIcon, currentMap);
markerSet(-234, 59, "Max Revive", itemIcon, currentMap);
markerSet(-235, 29, "Pokeball", itemIcon, currentMap);
markerSet(-204, 37, "X Accuracy", itemIcon, currentMap);
markerSet(-190, 5, "Potion", itemIcon, currentMap);
markerSet(-197, 39, "PP UP", itemIcon, currentMap);
markerSet(-102, 20, "Super Potion", itemIcon, currentMap);
markerSet(-109, 26, "PP UP", itemIcon, currentMap);
markerSet(-98, 31, "Great Ball", itemIcon, currentMap);
markerSet(-71, 23, "Iron", itemIcon, currentMap);
markerSet(-49, 18, "TM01 (Focus Punch)", tmitemIcon, currentMap);
markerSet(-56, 12, "Heal Powder", itemIcon, currentMap);
markerSet(-37, 51, "Protein", itemIcon, currentMap);
markerSet(-19, 71, "EnergyPowder", itemIcon, currentMap);
markerSet(-6, 47, "Rare Candy", itemIcon, currentMap);
markerSet(-7, 153, "Max Ether", itemIcon, currentMap);
markerSet(-5, 179, "Super Repel", itemIcon, currentMap);
markerSet(-63, 174, "Nugget", itemIcon, currentMap);
markerSet(-54, 212, "Stardust", itemIcon, currentMap);
markerSet(-104, 233, "TM37 (Sandstorm)", tmitemIcon, currentMap);
markerSet(-114, 203, "HP UP", itemIcon, currentMap);
markerSet(-118, 219, "Elixir", itemIcon, currentMap);
markerSet(-159, 156, "Great Ball", itemIcon, currentMap);
markerSet(-142, 149, "Revive", itemIcon, currentMap);
markerSet(-159, 228, "X Speed", itemIcon, currentMap);
markerSet(-227, 184, "PP UP", itemIcon, currentMap);
markerSet(-226, 194, "Guard Spec", itemIcon, currentMap);
markerSet(-229, 230, "Dire Hit", itemIcon, currentMap);
markerSet(-207, 226, "Rare Candy", itemIcon, currentMap);
markerSet(-198, 206, "Elixir", itemIcon, currentMap);
markerSet(-326, 225, "Potion", itemIcon, currentMap);
markerSet(-364, 182, "Star Piece", itemIcon, currentMap);
markerSet(-356, 29, "Protein", itemIcon, currentMap);
markerSet(-335, 8, "Iron", itemIcon, currentMap);
markerSet(-147, 309, "Hyper Potion", itemIcon, currentMap);
markerSet(-158, 347, "Ultra Ball", itemIcon, currentMap);
markerSet(-148, 351, "Calcium", itemIcon, currentMap);
markerSet(-155, 363, "PP UP", itemIcon, currentMap);
markerSet(-156, 377, "Revival Herb", itemIcon, currentMap);
markerSet(-149, 395, "Elixir", itemIcon, currentMap);
markerSet(-93, 438, "Zinc", itemIcon, currentMap);
markerSet(-117, 313, "Hyper Potion", itemIcon, currentMap);
markerSet(-121, 292, "Super Repel", itemIcon, currentMap);
markerSet(-96, 284, "Zinc", itemIcon, currentMap);
markerSet(-56, 283, "Hyper Potion", itemIcon, currentMap);
markerSet(-18, 288, "Rare Candy", itemIcon, currentMap);
markerSet(-5, 299, "Nugget", itemIcon, currentMap);
markerSet(-42, 304, "Elixir", itemIcon, currentMap);
markerSet(-53, 309, "Elixir", itemIcon, currentMap);
markerSet(-76, 305, "Leaf Stone", itemIcon, currentMap);
markerSet(-13, 382, "Nest Ball", itemIcon, currentMap);
markerSet(-33, 384, "Revive", itemIcon, currentMap);
markerSet(-55, 380, "Nugget", itemIcon, currentMap);
markerSet(-89, 367, "Full Heal", itemIcon, currentMap);
markerSet(-90, 460, "Revive", itemIcon, currentMap);
markerSet(-90, 455, "Carbos", itemIcon, currentMap);
markerSet(-106, 541, "Max Repel", itemIcon, currentMap);
markerSet(-135, 702, "Net Ball", itemIcon, currentMap);
markerSet(-179, 704, "Carbos", itemIcon, currentMap);
markerSet(-366, 227, "PP UP", itemIcon, currentMap);
markerSet(-77, 686, "Big Pearl", itemIcon, currentMap);
markerSet(-160, 653, "Rare Candy", itemIcon, currentMap);
markerSet(-179, 704, "Carbos", itemIcon, currentMap);
markerSet(-146, 654, "Zinc", itemIcon, currentMap);
markerSet(-277, 290, "Carbos", itemIcon, currentMap);
markerSet(-272, 373, "Big Pearl", itemIcon, currentMap);
markerSet(-287, 420, "Protein", itemIcon, currentMap);
markerSet(-272, 405, "Rare Candy", itemIcon, currentMap);
markerSet(-270, 328, "Star Piece", itemIcon, currentMap);
markerSet(-288, 368, "Max Revive", itemIcon, currentMap);
markerSet(-287, 262, "Star Piece", itemIcon, currentMap);


markerSet(-72, 588, "Red Shard", itemIcon, currentMap);
markerSet(-113, 591, "Blue Shard", itemIcon, currentMap);
markerSet(-141, 574, "Green Shard", itemIcon, currentMap);
markerSet(-71, 618, "Yellow Shard", itemIcon, currentMap);


markerSet(-47, 12, "2x Kelpsy Berry", berryIcon, currentMap);
markerSet(-47, 13, "2x Kelpsy Berry", berryIcon, currentMap);
markerSet(-47, 14, "2x Kelpsy Berry", berryIcon, currentMap);
markerSet(-244, 94, "2x Oran Berry", berryIcon, currentMap);
markerSet(-244, 95, "2x Pecha Berry", berryIcon, currentMap);
markerSet(-188, 34, "2x Cheri Berry", berryIcon, currentMap);
markerSet(-188, 36, "2x Leppa Berry", berryIcon, currentMap);
markerSet(-107, 31, "2x Bulk Berry", berryIcon, currentMap);
markerSet(-106, 31, "2x Bulk Berry", berryIcon, currentMap);
markerSet(-43, 71, "2x Persim Berry", berryIcon, currentMap);
markerSet(-44, 71, "2x Persim Berry", berryIcon, currentMap);
markerSet(-45, 71, "2x Persim Berry", berryIcon, currentMap);
markerSet(-5, 218, "2x Oran Berry", berryIcon, currentMap);
markerSet(-5, 219, "2x Oran Berry", berryIcon, currentMap);
markerSet(-5, 222, "2x Razz Berry", berryIcon, currentMap);
markerSet(-5, 223, "2x Razz Berry", berryIcon, currentMap);
markerSet(-26, 187, "2x Rawst Berry", berryIcon, currentMap);
markerSet(-26, 188, "2x Pecha Berry", berryIcon, currentMap);
markerSet(-26, 189, "2x Pecha Berry", berryIcon, currentMap);
markerSet(-26, 190, "2x Rawst Berry", berryIcon, currentMap);
markerSet(-154, 181, "2x Wepear Berry", berryIcon, currentMap);
markerSet(-154, 182, "2x Wepear Berry", berryIcon, currentMap);
markerSet(-154, 183, "2x Wepear Berry", berryIcon, currentMap);
markerSet(-171, 205, "2x Nanab Berry", berryIcon, currentMap);
markerSet(-171, 206, "2x Nanab Berry", berryIcon, currentMap);
markerSet(-171, 207, "2x Nanab Berry", berryIcon, currentMap);
markerSet(-225, 179, "2x Leppa Berry", berryIcon, currentMap);
markerSet(-225, 178, "2x Cheri Berry", berryIcon, currentMap);
markerSet(-225, 180, "2x Cheri Berry", berryIcon, currentMap);
markerSet(-223, 22, "2x Oran Berry", berryIcon, currentMap);
markerSet(-223, 24, "2x Pecha Berry", berryIcon, currentMap);
markerSet(-145, 275, "2x Sitrus Berry", berryIcon, currentMap);
markerSet(-145, 277, "2x Sitrus Berry", berryIcon, currentMap);
markerSet(-145, 331, "2x Pomeg Berry", berryIcon, currentMap);
markerSet(-145, 332, "2x Pomeg Berry", berryIcon, currentMap);
markerSet(-143, 331, "2x Pomeg Berry", berryIcon, currentMap);
markerSet(-143, 332, "2x Pomeg Berry", berryIcon, currentMap);
markerSet(-143, 334, "2x Grepa Berry", berryIcon, currentMap);
markerSet(-143, 335, "2x Grepa Berry", berryIcon, currentMap);
markerSet(-145, 334, "2x Grepa Berry", berryIcon, currentMap);
markerSet(-145, 335, "2x Grepa Berry", berryIcon, currentMap);
markerSet(-143, 337, "2x Qualot Berry", berryIcon, currentMap);
markerSet(-143, 338, "2x Qualot Berry", berryIcon, currentMap);
markerSet(-145, 337, "2x Qualot Berry", berryIcon, currentMap);
markerSet(-145, 338, "2x Qualot Berry", berryIcon, currentMap);
markerSet(-141, 401, "2x Leppa Berry", berryIcon, currentMap);
markerSet(-141, 403, "2x Leppa Berry", berryIcon, currentMap);
markerSet(-153, 429, "2x Pecha Berry", berryIcon, currentMap);
markerSet(-153, 430, "2x Sitrus Berry", berryIcon, currentMap);
markerSet(-153, 431, "2x Rawst Berry", berryIcon, currentMap);
markerSet(-90, 309, "2x Sitrus Berry", berryIcon, currentMap);
markerSet(-90, 310, "2x Leppa Berry", berryIcon, currentMap);
markerSet(-23, 288, "2x Hondew Berry", berryIcon, currentMap);
markerSet(-23, 289, "2x Hondew Berry", berryIcon, currentMap);
markerSet(-5, 304, "2x Pomeg Berry", berryIcon, currentMap);
markerSet(-5, 305, "2x Pomeg Berry", berryIcon, currentMap);
markerSet(-5, 306, "2x Pomeg Berry", berryIcon, currentMap);
markerSet(-207, 3, "2x Cheri Berry", berryIcon, currentMap);
markerSet(-205, 3, "2x Oran Berry", berryIcon, currentMap);
markerSet(-24, 394, "2x Aspear Berry", berryIcon, currentMap);
markerSet(-24, 395, "2x Aspear Berry", berryIcon, currentMap);
markerSet(-24, 396, "2x Aspear Berry", berryIcon, currentMap);
markerSet(-79, 367, "2x Razz Berry", berryIcon, currentMap);
markerSet(-79, 366, "2x Nanab Berry", berryIcon, currentMap);
markerSet(-79, 365, "2x Pinap Berry", berryIcon, currentMap);
markerSet(-79, 364, "2x Wepear Berry", berryIcon, currentMap);
markerSet(-92, 369, "2x Pecha Berry", berryIcon, currentMap);
markerSet(-92, 370, "2x Pecha Berry", berryIcon, currentMap);
markerSet(-92, 371, "2x Pecha Berry", berryIcon, currentMap);
markerSet(-82, 414, "2x Persim Berry", berryIcon, currentMap);
markerSet(-82, 415, "2x Aspear Berry", berryIcon, currentMap);
markerSet(-82, 416, "2x Rawst Berry", berryIcon, currentMap);
markerSet(-82, 417, "2x Chesto Berry", berryIcon, currentMap);
markerSet(-94, 465, "2x Nanab Berry", berryIcon, currentMap);
markerSet(-94, 466, "2x Nanab Berry", berryIcon, currentMap);
markerSet(-123, 58, "2x Pinap Berry", berryIcon, currentMap);
markerSet(-123, 61, "2x Pinap Berry", berryIcon, currentMap);
markerSet(-123, 59, "2x Chesto Berry", berryIcon, currentMap);
markerSet(-123, 60, "2x Chesto Berry", berryIcon, currentMap);