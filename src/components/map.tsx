import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import useMap from '../hooks/use-map.tsx';
import {Location, OfferType} from '../types.ts';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../const/const.ts';
import 'leaflet/dist/leaflet.css';
import { ICON_WIDTH, ICON_HEIGHT, ANCHOR_X, ANCHOR_Y } from '../const/const.ts';

type MapProps = {
  city: Location;
  points: OfferType[];
  selectedPoint: OfferType | undefined;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ANCHOR_X, ANCHOR_Y]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ANCHOR_X, ANCHOR_Y]
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
            selectedPoint && point.city.name === selectedPoint.city.name
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

  return <div style={{height: '100%'}} ref={mapRef} />;
}

export default Map;
