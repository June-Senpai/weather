import PropTypes from "prop-types";
import { formatDate } from "../utils/dateFormatting";
import { formatDayOfMonth } from "../utils/dayFormatting";
import { kelvinToCelsius } from "../utils/temperatureConverter";

const Card = ({ data }) => {
  const { list } = data;

  const dailyForecasts = list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );
  console.log({ dailyForecasts });
  // const date = formatDayOfMonth(forecast.dt_txt);

  return (
    <div className="">
      <section className="flex flex-wrap gap-4">
        {dailyForecasts.map((forecast, index) => (
          <div
            key={index}
            className={`dark:bg-darkSecondary group flex h-48 w-60 flex-col items-center rounded-3xl  border-2 bg-slate-50 shadow-md transition-[width] duration-500 hover:w-60 dark:border-none dark:shadow-pink-300 lg:w-20 ${index === 0 && "lg:w-60"}`}
          >
            <section
              className={`hidden flex-col items-center gap-7 pt-2 group-hover:hidden lg:flex ${index === 0 && "lg:hidden"}`}
            >
              <h2 className="dark:bg-primary w-3/4 rounded-full bg-[#F8ACB4] p-1.5 text-center ">
                {formatDayOfMonth(forecast.dt_txt)}
              </h2>
              <TemperatureInC temp={forecast.main.temp} />
              <img
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                alt=""
              />
            </section>
            <section
              className={` my-auto whitespace-nowrap transition-opacity duration-75 group-hover:opacity-100 lg:opacity-0 ${index === 0 && "lg:opacity-100"}`}
            >
              <p>Date: {formatDate(forecast.dt_txt)}</p>
              <p>
                Temperature: <TemperatureInC temp={forecast.main.temp} />
              </p>
              <p>Weather: {forecast.weather[0].description}</p>
              <p>Humidity: {forecast.main.humidity}%</p>
              <p>Wind Speed: {forecast.wind.speed} m/s</p>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Card;

const TemperatureInC = ({ temp }) => {
  return (
    <var className="">
      {kelvinToCelsius(temp)} <sup>0</sup>C
    </var>
  );
};

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
