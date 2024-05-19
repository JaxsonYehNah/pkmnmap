var JaggedPassVector = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "Jagged Pass",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                        "name": "Machop",
                        "area": "Grass",
                        "levels": "20-22",
                        "rate": "25%",
                    },
                    {
                        "name": "Numel",
                        "area": "Grass",
                        "levels": "20-22",
                        "rate": "55%",
                    },
                    {
                        "name": "Spoink",
                        "area": "Grass",
                        "levels": "20-22",
                        "rate": "20%",
                    },
                ],
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    getCordfromLoc(-167, 384),
                    getCordfromLoc(-167, 414),
                    getCordfromLoc(-213, 414),
                    getCordfromLoc(-213, 384),
                    getCordfromLoc(-167, 384),
                ]
            ]
        }
    }]
};