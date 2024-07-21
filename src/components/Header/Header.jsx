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
      <img src={logo} alt="What to Wear Logo" />
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
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" />
      </div>
    </header>
  );
}

export default Header;
