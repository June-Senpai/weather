import PropTypes from "prop-types";
import { formatDate } from "../utils/dateFormatting";
import { formatDayOfMonth } from "../utils/dayFormatting";

const Card = ({ data }) => {
  const { list } = data;

  const dailyForecasts = list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );
  console.log({ dailyForecasts });

  return (
    <div className="weather-card">
      <section className="flex flex-wrap gap-12">
        {dailyForecasts.map((forecast, index) => (
          <div
            key={index}
            className={`group relative h-36 w-16 rounded-xl rounded-tl-none bg-red-500 transition-[width] duration-500 hover:w-60 ${index === 0 && "w-60"}`}
          >
            <section className="">
              <h2 className="absolute -top-5 rounded-lg bg-red-500 p-1">
                {formatDayOfMonth(forecast.dt_txt)}
              </h2>
              <div
                className={`ml-2 mt-4 flex flex-col group-hover:hidden ${index === 0 && "hidden"}`}
              >
                {forecast.main.temp}
              </div>
            </section>
            <section
              className={`ml-2 mt-3 h-32 whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${index === 0 && "opacity-100"}`}
            >
              <p>Date: {formatDate(forecast.dt_txt)}</p>
              <p>Temperature: {forecast.main.temp} K</p>
              <p>Weather: {forecast.weather[0].description}</p>
              <p>Humidity: {forecast.main.humidity}%</p>
              <p>Wind Speed: {forecast.wind.speed} m/s</p>
            </section>
          </div>
        ))}
      </section>
      <section className="m-32 grid grid-cols-3 gap-4">
        {dailyForecasts.map((forecast, index) => (
          <div key={index} className="bg-blue-500 ">
            <p>Date: {forecast.dt_txt}</p>
            <p>Temperature: {forecast.main.temp} K</p>
            <p>Weather: {forecast.weather[0].description}</p>
            <p>Humidity: {forecast.main.humidity}%</p>
            <p>Wind Speed: {forecast.wind.speed} m/s</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        dt_txt: PropTypes.string.isRequired,
        main: PropTypes.shape({
          temp: PropTypes.number.isRequired,
          humidity: PropTypes.number.isRequired,
        }).isRequired,
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            description: PropTypes.string.isRequired,
          }).isRequired,
        ).isRequired,
        wind: PropTypes.shape({
          speed: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};
