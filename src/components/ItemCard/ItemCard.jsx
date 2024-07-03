import "./ItemCard.css";
import suny from "../../assets/Day/sunnyDay.png";

function ItemCard() {
  return (
    <div className="card">
      <img src={suny} alt="" className="card__image" />
      <p className="card__title">Cap</p>
    </div>
  );
}

export default ItemCard;
