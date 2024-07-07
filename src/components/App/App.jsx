import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  //left is variable name, right is function used to change the variable

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
      <ModalWithForm buttonText="Add garment" title="New garment">
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
            Hot
          </label>
          <label htmlFor="warm" className="modal__radio-label">
            <input
              name="option"
              value="2"
              id="warm"
              type="radio"
              className="modal__radio-input"
            />
            Warm
          </label>
          <label htmlFor="cold" className="modal__radio-label">
            <input
              name="option"
              value="3"
              id="cold"
              type="radio"
              className="modal__radio-input"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
