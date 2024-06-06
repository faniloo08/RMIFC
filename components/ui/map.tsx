// components/ChoroplethMap.tsx
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Fix default icon issue in Leaflet when using it with React
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Define your GeoJSON data
const geojsonData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                [
                  [
                    27.252619654232234,
                    8.968510173112904
                  ],
                  [
                    26.31898796914267,
                    -11.978293638954383
                  ],
                  [
                    23.324035979316193,
                    -32.99107800881241
                  ],
                  [
                    74.03929577131862,
                    -33.80821200087424
                  ],
                  [
                    73.0699342992114,
                    -13.126795528093062
                  ],
                  [
                    72.82606412472336,
                    8.132868611730359
                  ],
                  [
                    27.252619654232234,
                    8.968510173112904
                  ]
                ]
              ],
              "type": "Polygon"
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                47.52244465357728,
                -18.963812702457176
              ],
              "type": "Point"
            }
          }
        ]
      }
    ]
  };

const Map = () => {
  const [geojson, setGeojson] = useState<any>(null);

  useEffect(() => {
    setGeojson(geojsonData);
  }, []);

  const getColor = (d: number) => {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
  }

  const style = (feature: any) => {
    return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.5
    };
  }

  return (
    <div className="2xl:w-[100%] 2xl:ml-[-30px]">
        <MapContainer
        center={[-20.0, 60.0]} // Center the map to the Indian Ocean
        zoom={5}
        style={{ borderRadius: '20px', boxShadow:'6px 6px 10px 0px rgba(0, 0, 0, 0.4)'}}
        className="h-[150px] w-[450px] md:w-[90%] lg:w-[90%] xl:w-[100%] ">
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geojson && (
            <GeoJSON data={geojson} style={style} />
        )}
        </MapContainer>
    </div>

  );
};

export default Map;
