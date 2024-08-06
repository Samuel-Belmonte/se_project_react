import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ closeActiveModal, onAddItem, isOpen }) {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setLink] = useState("");
  const handleLinkChange = (e) => {
    console.log(e.target.value);
    setLink(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, weather });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      buttonText="Add garment"
      title="New garment"
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          placeholder="Name"
          type="text"
          className="modal__input"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          placeholder="Image URL"
          type="url"
          className="modal__input"
          id="imageUrl"
          value={link}
          onChange={handleLinkChange}
          required
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
            onChange={handleWeatherChange}
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
            onChange={handleWeatherChange}
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
            onChange={handleWeatherChange}
          />
          <span className="modal__span">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
