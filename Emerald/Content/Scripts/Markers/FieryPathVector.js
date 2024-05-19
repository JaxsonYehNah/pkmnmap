var FieryPathVector = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "Fiery Path",
            "world": "Overworld",
            "Pokémon": {
                "Cave": [{
                        "name": "Machop",
                        "area": "Walking",
                        "levels": "15-16",
                        "rate": "15%",
                    },
                    {
                        "name": "Grimer",
                        "area": "Walking",
                        "levels": "14",
                        "rate": "2%",
                    },
                    {
                        "name": "Koffing",
                        "area": "Walking",
                        "levels": "15-16",
                        "rate": "25%",
                    },
                    {
                        "name": "Slugma",
                        "area": "Walking",
                        "levels": "15",
                        "rate": "10%",
                    },
                    {
                        "name": "Numel",
                        "area": "Walking",
                        "levels": "15-16",
                        "rate": "30%",
                    },
                    {
                        "name": "Torkoal",
                        "area": "Walking",
                        "levels": "14-16",
                        "rate": "18%",
                    },
                ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    getCordfromLoc(-172, 382),
                    getCordfromLoc(-172, 417),
                    getCordfromLoc(-210, 417),
                    getCordfromLoc(-210, 382),
                    getCordfromLoc(-172, 382),
                ]
            ]
        }
    }]
};