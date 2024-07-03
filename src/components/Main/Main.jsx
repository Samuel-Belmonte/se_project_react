import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";

function Main() {
  return (
    <main className="main">
      <WeatherCard />
      <p className="main__text">{`Today is 75F / You may want to wear:`}</p>
    </main>
  );
}

export default Main;
