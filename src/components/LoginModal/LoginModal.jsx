import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ closeActiveModal, handleLogin, isOpen, handleRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      buttonText="Log in"
      title="Log in"
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          placeholder="Email"
          type="email"
          className="modal__input"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          placeholder="Password"
          type="password"
          className="modal__input"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <button
        type="button"
        onClick={handleRegister}
        className="login__register-button"
      >
        or Register
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
