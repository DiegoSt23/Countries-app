import { NavLink } from "react-router-dom";

const CountryBox = ({name, region, flag}) => {
  return (
    <div className="country-container">
      <NavLink to={`/${name.toLowerCase()}`} className="link">
        <div className="flag-container">
          <img src={flag} alt={name} className="flag"/>
        </div>      
        <h2>{name}</h2>
      </NavLink>          
      <h4>{region}</h4>  
    </div>
  )
};

export default CountryBox