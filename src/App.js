import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        This project was coded by{" "}
        <a
          href="https://hilarious-pie-d37c2c.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Tika Lubis
        </a>{" "}
        and open-sourced on{" "}
        <a
          href="https://github.com/tikameutia/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
