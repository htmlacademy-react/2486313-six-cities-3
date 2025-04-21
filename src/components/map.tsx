import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import useMap from '../hooks/use-map.tsx';
import {Location, OfferType} from '../types.ts';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../const/const.ts';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: Location;
  points: OfferType[];
  selectedPoint: OfferType | undefined;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, points, selectedPoint} : MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet.layerGroup().addTo(map);
      points.forEach((point) => {

        const marker = leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.city.name === selectedPoint.city.name
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <div style={{height: '500px'}} ref={mapRef} />;
}

export default Map;
