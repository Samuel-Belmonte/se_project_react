import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    const weatherOption = filteredOptions[0];
  }

  return (
    <section className="weather-card">
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherOption?.condition} weather in the ${
          weatherOption?.day ? "day" : "night"
        }time`}
        className="weather-card__image"
      />
      <h2 className="weather-card__temperature">{weatherData.temp.F}&deg;F</h2>
    </section>
  );
}

export default WeatherCard;
