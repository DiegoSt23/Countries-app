import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Weather = ({temp, wind, humidity, icon, description, tempIcon, windIcon, humidityIcon, iconLeft, changeView}) => {
  return (
    <div className="details-sub-container">
      <div className="nav">
        <FontAwesomeIcon icon={iconLeft} onClick={changeView} className="icon2"/>  
      </div>
      <div className="details">
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon}/>
        <h2>{description.toUpperCase()}</h2>
        <h3><FontAwesomeIcon icon={tempIcon} className="weather-icon"/> TEMPERATURE: {temp}°C</h3>
        <h3><FontAwesomeIcon icon={windIcon} className="weather-icon"/> WIND: {wind} km/h</h3>
        <h3><FontAwesomeIcon icon={humidityIcon} className="weather-icon"/> HUMIDITY: {humidity} %</h3>
      </div>
      <div className="nav"></div>
    </div>
  )
};

export default Weather