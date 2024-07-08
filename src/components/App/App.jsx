import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  //left is variable name, right is function used to change the variable
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        activeModal={activeModal}
        buttonText="Add garment"
        title="New garment"
        onClose={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            placeholder="Name"
            type="text"
            className="modal__input"
            id="name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image
          <input
            placeholder="Image URL"
            type="url"
            className="modal__input"
            id="imageUrl"
          />
        </label>
        <fieldset className="modal__fieldset">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__radio-label">
            <input
              name="option"
              value="1"
              id="hot"
              type="radio"
              className="modal__radio-input"
            />
            <span className="modal__span">Hot</span>
          </label>
          <label htmlFor="warm" className="modal__radio-label">
            <input
              name="option"
              value="2"
              id="warm"
              type="radio"
              className="modal__radio-input"
            />
            <span className="modal__span">Warm</span>
          </label>
          <label htmlFor="cold" className="modal__radio-label">
            <input
              name="option"
              value="3"
              id="cold"
              type="radio"
              className="modal__radio-input"
            />
            <span className="modal__span">Cold</span>
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        onClose={closeActiveModal}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
