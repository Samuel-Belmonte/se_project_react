import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="What to Wear Logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__user-container">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__button"
        >
          + Add Clothes
        </button>
        <Link className="header__link" to="/profile">
          <p className="header__username">Terrence Tegegne</p>
        </Link>
        <Link to="/profile">
          <img src={avatar} alt="Terrence Tegegne" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
