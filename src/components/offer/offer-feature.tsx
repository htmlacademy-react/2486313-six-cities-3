import { OfferFeatureProps } from '../../types/types.ts';

function OfferFeature({placeName, bedrooms, maxAdults} : OfferFeatureProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {placeName}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

export {OfferFeature};
