var SootopolisVectorData = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "Sootopolis",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Magikarp",
                    "area": "Surfing",
                    "levels": "5-35",
                    "rate": '100%',
                }, ],
                "Fishing": [

                    {
                        "name": "Tentacool",
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
                        "name": "Magikarp",
                        "area": "Good Rod",
                        "levels": "10-30",
                        "rate": '100%',
                    },
                    {
                        "name": "Magikarp",
                        "area": "Super Rod",
                        "levels": "30-35",
                        "rate": '80%',
                    },
                    {
                        "name": "Gyarados",
                        "area": "Super Rod",
                        "levels": "5-45",
                        "rate": '20%',
                    }
                ],
            },
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    getCordfromLoc(-161, 369),
                    getCordfromLoc(-161, 429),
                    getCordfromLoc(-221, 429),
                    getCordfromLoc(-221, 369),
                    getCordfromLoc(-161, 369),
                ]
            ]
        }
    }]
};