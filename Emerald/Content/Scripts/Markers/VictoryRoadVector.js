var VictoryRoadVector = {
    "type": "FeatureCollection",
    "features": [{
            "type": "Feature",
            "properties": {
                "name": "1F",
                "world": "Overworld",
                "Pokémon": {
                    "Cave": [{
                            "name": "Zubat",
                            "area": "Walking",
                            "levels": "36",
                            "rate": '10%',
                        },
                        {
                            "name": "Golbat",
                            "area": "Walking",
                            "levels": "38, 40",
                            "rate": '25%',
                        },
                        {
                            "name": "Whismur",
                            "area": "Walking",
                            "levels": "36",
                            "rate": '5%',
                        },
                        {
                            "name": "Loudred",
                            "area": "Walking",
                            "levels": "40",
                            "rate": '10%',
                        },
                        {
                            "name": "Makuhita",
                            "area": "Walking",
                            "levels": "36",
                            "rate": '10%',
                        },
                        {
                            "name": "Hariyama",
                            "area": "Walking",
                            "levels": "38, 40",
                            "rate": '25%',
                        },
                        {
                            "name": "Aron",
                            "area": "Walking",
                            "levels": "36",
                            "rate": '5%',
                        },
                        {
                            "name": "Lairon",
                            "area": "Walking",
                            "levels": "40",
                            "rate": '10%',
                        },
                    ]
                },
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        getCordfromLoc(-136, 376),
                        getCordfromLoc(-136, 422),
                        getCordfromLoc(-181, 422),
                        getCordfromLoc(-181, 376),
                        getCordfromLoc(-136, 376),
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "B1F",
                "world": "Overworld",
                "Pokémon": {
                    "Cave": [{
                            "name": "Golbat",
                            "area": "Walking",
                            "levels": "38, 40, 42",
                            "rate": '60%',
                        },
                        {
                            "name": "Hariyama",
                            "area": "Walking",
                            "levels": "38, 40m 42",
                            "rate": '60%',
                        },
                        {
                            "name": "Mawile",
                            "area": "Walking",
                            "levels": "38",
                            "rate": '60%',
                        },
                        {
                            "name": "Lairon",
                            "area": "Walking",
                            "levels": "40, 42",
                            "rate": '60%',
                        },
                    ],
                    "Rock Smash": [{
                            "name": "Geodude",
                            "area": "Rock Smash",
                            "levels": "30-40",
                            "rate": '30%',
                        },
                        {
                            "name": "Graveler",
                            "area": "Rock Smash",
                            "levels": "30-40",
                            "rate": '70%',
                        },
                    ]
                },
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        getCordfromLoc(-182, 376),
                        getCordfromLoc(-182, 422),
                        getCordfromLoc(-213, 422),
                        getCordfromLoc(-213, 376),
                        getCordfromLoc(-182, 376),
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "B2F",
                "world": "Overworld",
                "Pokémon": {
                    "Cave": [{
                            "name": "Golbat",
                            "area": "Walking",
                            "levels": "38, 40, 42",
                            "rate": '35%',
                        },
                        {
                            "name": "Hariyama",
                            "area": "Walking",
                            "levels": "38, 40m 42",
                            "rate": '35%',
                        },
                        {
                            "name": "Mawile",
                            "area": "Walking",
                            "levels": "38",
                            "rate": '5%',
                        },
                        {
                            "name": "Lairon",
                            "area": "Walking",
                            "levels": "40, 42",
                            "rate": '25%',
                        },
                    ],
                    "Surfing": [{
                        "name": "Golbat",
                        "area": "Surfing",
                        "levels": "25-40",
                        "rate": '100%',
                    }],
                    "Fishing": [

                        {
                            "name": "Goldeen",
                            "area": "Old Rod",
                            "levels": "5-10",
                            "rate": '30%',
                        },
                        {
                            "name": "Magikarp",
                            "area": "Old Rod",
                            "levels": "5-10",
                            "rate": '70%',
                        },
                        {
                            "name": "Goldeen",
                            "area": "Good Rod",
                            "levels": "10-30",
                            "rate": '20%',
                        },
                        {
                            "name": "Magikarp",
                            "area": "Good Rod",
                            "levels": "10-30",
                            "rate": '60%',
                        },
                        {
                            "name": "Barboach",
                            "area": "Good Rod",
                            "levels": "10-30",
                            "rate": '20%',
                        },
                        {
                            "name": "Barboach",
                            "area": "Super Rod",
                            "levels": "25-35",
                            "rate": '80%',
                        },
                        {
                            "name": "Whiscash",
                            "area": "Super Rod",
                            "levels": "30-45",
                            "rate": '20%',
                        },
                    ]
                },
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        getCordfromLoc(-214, 376),
                        getCordfromLoc(-214, 422),
                        getCordfromLoc(-245, 422),
                        getCordfromLoc(-245, 376),
                        getCordfromLoc(-214, 376),
                    ]
                ]
            }
        }
    ]
};