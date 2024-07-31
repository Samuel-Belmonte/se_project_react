import "./SideBar.css";
import avatar from "../../../assets/avatar.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="Terrence Tegegne" className="sidebar__image" />
      <p className="sidebar__name">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
