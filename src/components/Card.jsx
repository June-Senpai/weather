import PropTypes from "prop-types"

const Card = ({ data }) => {
  return (
    <div>
      <h1>{data.base}</h1>
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
    </div>
  )
}
export default Card

Card.propTypes = {
  data: PropTypes.shape({
    base: PropTypes.string.isRequired,
    weather: PropTypes.array,
  }).isRequired,
}
