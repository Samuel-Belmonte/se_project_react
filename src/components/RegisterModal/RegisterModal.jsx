import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import "./RegisterModal.css";

function AddItemModal({
  closeActiveModal,
  isOpen,
  handleRegistration,
  handleLogin,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      buttonText="Next"
      title="Sign Up"
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          placeholder="Email"
          type="text"
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
      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL
        <input
          placeholder="Avatar URL"
          type="url"
          className="modal__input"
          id="avatarUrl"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
      <button
        type="button"
        onClick={handleLogin}
        className="register__login"
        to="login"
      >
        or Log in
      </button>
    </ModalWithForm>
  );
}

export default AddItemModal;
