import "../styles/Country.css";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { searchCountry, getWeather } from "../services/petitions";
import { 
  faChevronLeft, 
  faChevronRight,
  faThermometerThreeQuarters,
  faWind,
  faTint
} from "@fortawesome/free-solid-svg-icons";
import Details from "./Details";
import Weather from "./Weather";
 
const Country = () => {
  const {name} = useParams();
  const [requestStatus, setRequestStatus] = useState(true)
  const [flag, setFlag] = useState("");
  const [countryName, setCountryName] = useState("");
  const [region, setRegion] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [capital, setCapital] = useState("");
  const [language, setLanguage] = useState("");
  const [population, setPopulation] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [infoStatus, setInfoStatus] = useState(true);
  ///////////////Weather/////////////// 
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHhumidity] = useState("");
  const [wind, setWind] = useState("");
  const [color, setColor] = useState("rgb(228, 148, 0)");
  const [weatherColor, setWeatherColor] = useState("");
 
  useEffect(() => {
    const func = async () => {            
      try {
        const res = await searchCountry(name); 
        setRequestStatus(true);     
        setFlag(res.data[0].flag);
        setCountryName(res.data[0].name);
        setRegion(res.data[0].region);
        setSubRegion(res.data[0].subregion);
        setCapital(res.data[0].capital);
        setLanguage(res.data[0].languages[0].name);
        setPopulation(res.data[0].population);
        setLat(res.data[0].latlng[0]);
        setLon(res.data[0].latlng[1]);
      } catch (error) {
        setRequestStatus(false)
      }      
    }
    func()         
  }, [name]);

  useEffect(() => {
    if(lat) {
      const func = async () => {
        const res = await getWeather(lat, lon);
        setTemp(res.data.main.temp);
        setHhumidity(res.data.main.humidity);
        setIcon(res.data.weather[0].icon);
        setDescription(res.data.weather[0].description);
        setWind(res.data.wind.speed);
      }
      func()
    }    
  }, [lat, lon]);

  const changeView = () => {
    setInfoStatus(!infoStatus)
  };

  useEffect(() => {
    if (infoStatus) {
      setColor("rgb(228, 148, 0)")
    }
    if (!infoStatus) {
      setColor(weatherColor)
    }
  }, [infoStatus, weatherColor])

  useEffect(() => {
    if (description === "clear sky") {
      setWeatherColor("rgb(13, 178, 228)")
    }
    if (description === "few clouds") {
      setWeatherColor("rgb(134, 203, 224)")
    }
    if (description === "overcast clouds") {
      setWeatherColor("rgb(85, 118, 128)")
    }
    if (description === "scattered clouds") {
      setWeatherColor("rgb(142, 181, 196)")
    }
    if (description === "broken clouds") {
      setWeatherColor("rgb(122, 146, 155)")
    }
    if (description === "shower rain") {
      setWeatherColor("rgb(64, 82, 88)")
    }
    if (description === "rain") {
      setWeatherColor("rgb(93, 119, 128)")
    }
    if (description === "light rain") {
      setWeatherColor("rgb(117, 168, 185)")
    }
    if (description === "thunderstorm") {
      setWeatherColor("rgb(34, 54, 61)")
    }
    if (description === "snow") {
      setWeatherColor("rgb(214, 214, 214)")
    }
    if (description === "mist") {
      setWeatherColor("rgb(185, 185, 185)")
    }   
  }, [description])
     
  return (
    <div className="country-info-container">
      {requestStatus 
        ? <>
            <div className="flag-name-container">
              <div className="main-flag-container">
                <img src={flag} alt={name} className="main-flag" />
                <h1>{countryName}</h1>
              </div>
            </div>
            <div className="main-details-container" style={{backgroundColor: color}}>
              {infoStatus
                ? <Details 
                    region={region}
                    subRegion={subRegion}
                    capital={capital}
                    language={language}
                    population={population}
                    changeView={changeView}
                    iconRight={faChevronRight}
                  />        
                : <Weather
                    temp={temp}
                    wind={wind}
                    humidity={humidity}
                    icon={icon}
                    description={description}
                    tempIcon={faThermometerThreeQuarters}
                    windIcon={faWind}
                    humidityIcon={faTint}
                    iconLeft={faChevronLeft}
                    changeView={changeView}          
                  />
              }
              <div className="buttons-container"> 
                <a href={`https://www.google.com/search?q=${countryName}`} target="blank">
                  <button>Google It</button>
                </a>  
                <NavLink to="/">                 
                  <button>Back</button>
                </NavLink> 
              </div>                
            </div>
          </>
        : <div className="error-message">
            <h3>Please enter a valid name</h3>
            <h3>OR</h3>
            <NavLink to="/">
              <button>Back Home</button>
            </NavLink>         
          </div>}     
    </div>    
  )
};

export default Country