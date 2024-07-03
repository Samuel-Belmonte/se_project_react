import "./Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.png";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="What to Wear Logo" className="header__logo" />
      <p className="header__date-and-location">{
        `${currentDate}, Location` /*Current Location (Section 5)*/
      }</p>
      <button className="header__button">+ Add Clothes</button>
      {/*opens ModalWithForm*/}
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
