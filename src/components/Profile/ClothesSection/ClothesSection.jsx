import "./ClothesSection.css";

import ItemCard from "../../ItemCard/ItemCard";

function ClothesSection({ onCardClick, clothingItems, handleAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__top">
        <p className="clothes-section__subtitle">Your items</p>
        <button className="clothes-section__button" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              // TODO - pass as prop (in ClothesSection)
              onCardClick={onCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
