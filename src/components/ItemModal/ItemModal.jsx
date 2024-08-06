import "./ItemModal.css";
import closeButton from "../../assets/close.svg";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(card);
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeButton} alt="close button" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div>
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button className="modal__delete" onClick={handleDeleteClick}>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
