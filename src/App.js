import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather application</h1>
        <Weather defaultCity="Amsterdam" />

        <footer>
          This project is created by Elisabeth Barmentlo and it is{" "}
          <a
            href="https://github.com/EBarmentlo/react-weather-app"
            target="-blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
