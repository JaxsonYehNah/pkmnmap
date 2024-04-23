var RusturfTunnelVectorData = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "Rusturf Tunnel",
            "world": "Overworld",
            "Pokémon": {
                "Cave": [{
                    "name": "Whismur",
                    "area": "Walking",
                    "levels": "5-8",
                    "rate": "100%",
                }, ],
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    getCordfromLoc(-179, 381),
                    getCordfromLoc(-179, 417),
                    getCordfromLoc(-203, 417),
                    getCordfromLoc(-203, 381),
                    getCordfromLoc(-179, 381),
                ]
            ]
        }
    }]
};