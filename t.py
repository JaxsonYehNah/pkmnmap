import gdal2tiles
source_path = "/home/jaxsonkeenes/PKEM.png"
destination_path = "/home/jaxsonkeenes/tiles"
def create_tiles(source_path, destination_path):
    options = {'zoom': '1-10',
        'nb_processes': 4,
        'tile_size': 256,
        'srs':'EPSG:4326'
        }
    gdal2tiles.generate_tiles(source_path, destination_path,
     **options)
create_tiles(source_path, destination_path)
