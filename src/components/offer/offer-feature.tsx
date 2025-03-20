

function OfferFeature({textContent} : {textContent: string | undefined}) {
  return (
    <li className="offer__feature offer__feature--entire">
      {textContent}
    </li>
  );
}

export {OfferFeature};
