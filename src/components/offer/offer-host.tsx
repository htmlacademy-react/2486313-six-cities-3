import { OfferHostText } from './offer-host-text.tsx';

type OfferHostProps = {
  image: string;
  name: string;
  status: boolean;
  description: string;
}

function OfferHost({image, name, status, description} : OfferHostProps) {
  return (
    <>
      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img className="offer__avatar user__avatar" src={image} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="offer__user-name">
          {name}
        </span>
        <span className="offer__user-status">
          {status}
        </span>
      </div>
      <div className="offer__description">
        <OfferHostText text={description}/>
      </div>
    </>
  );
}

export {OfferHost};
