import "./WeatherCard.css";
import sunnyDay from "../../assets/Day/sunnyDay.png";

function WeatherCard() {
  return (
    <div className="weather">
      <img src={sunnyDay} alt="" className="weather__image" />
      <h2 className="weather__temperature">75F</h2>
    </div>
  );
}

export default WeatherCard;
