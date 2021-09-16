import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Details = ({region, subRegion, capital, language, population, iconRight, changeView}) => {
  return (
    <div className="details-sub-container">
      <div className="nav"></div>
      <div className="details">
        <h2>DETAILS</h2>
        <h3>REGION: {region}</h3>
        <h3>SUB REGION: {subRegion}</h3>
        <h3>CAPITAL: {capital}</h3>
        <h3>LANGUAGE: {language}</h3>
        <h3>POPULATION: {population}</h3>
      </div>
      <div className="nav">
        <FontAwesomeIcon icon={iconRight} onClick={changeView} className="icon2"/>
      </div>
    </div>
  )
};

export default Details