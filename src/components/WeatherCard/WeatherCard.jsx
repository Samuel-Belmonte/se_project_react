import "./WeatherCard.css";
import sunnyDay from "../../assets/Day/sunnyDay.png";

function WeatherCard() {
  return (
    <section className="weather-card">
      <img src={sunnyDay} alt="" className="weather-card__image" />
      <h2 className="weather-card__temperature">75&deg;F</h2>
    </section>
  );
}

export default WeatherCard;
