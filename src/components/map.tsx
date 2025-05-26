import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import useMap from '../hooks/use-map.tsx';
import {Location, OfferType} from '../types/types.ts';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../const/const.ts';
import 'leaflet/dist/leaflet.css';
import { IconSize, AnchorCoords } from '../const/const.ts';

type MapProps = {
  city?: Location;
  points: OfferType[];
  selectedPoint: OfferType | undefined;
};

const commonIconSettings = {
  iconSize: [IconSize.WIDTH, IconSize.HEIGHT] as [number, number],
  iconAnchor: [AnchorCoords.X, AnchorCoords.Y] as [number, number],
};

const defaultCustomIcon = leaflet.icon({
  ...commonIconSettings,
  iconUrl: URL_MARKER_DEFAULT,
});

const currentCustomIcon = leaflet.icon({
  ...commonIconSettings,
  iconUrl: URL_MARKER_CURRENT,
});

function Map({city, points, selectedPoint} : MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map && city) {
      const markerLayer = leaflet.layerGroup().addTo(map);
      points.forEach((point) => {

        const marker = leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);

        map.setView([city.latitude, city.longitude], city.zoom);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [city, map, points, selectedPoint]);

  return <div style={{height: '100%'}} ref={mapRef} />;
}

export default Map;
