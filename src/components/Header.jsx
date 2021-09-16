import "../styles/Header.css"
import { useState } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const history = useHistory();
  const [value1, setValue1] = useState("");
  const [menuStatus, setMenuStatus] = useState(true);

  const handleSearchCountry = () => {
    if (value1) {
      history.push(`/${value1.toLowerCase()}`);
      setMenuStatus(false)
    }
  };

  const openCloseMenu = () => {
    setMenuStatus(!menuStatus)
  };

  return (
    <div className="header"> 
        <div className="name-container">
          <h3>Countries App</h3>
          <FontAwesomeIcon icon={menuStatus ? faTimes : faSearch} className="search-icon" onClick={openCloseMenu}/>
        </div>   
        <div className="search-container">
          <input value={value1} onChange={e => {setValue1(e.target.value)}} placeholder="Search by name"/>
          <button onClick={handleSearchCountry}>Search</button>
        </div>
        <div className="search-container2" style={{display: menuStatus ? "flex" : "none"}}>
          <input value={value1} onChange={e => {setValue1(e.target.value)}} placeholder="Search by name"/>
          <button onClick={handleSearchCountry}>Search</button>
        </div>                  
    </div>
  )
};

export default Header