import PropTypes from "prop-types"

const Card = ({ data }) => {
  const { city, list } = data

  const dailyForecasts = list.filter((item) => item.dt_txt.includes("12:00:00"))
  console.log({ dailyForecasts })

  return (
    <div className="weather-card">
      <h2>5-Day Weather Forecast for {city.name}</h2>
      <section className="grid grid-cols-3 gap-4">
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
  )
}

export default Card

Card.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
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
          }).isRequired
        ).isRequired,
        wind: PropTypes.shape({
          speed: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
}
