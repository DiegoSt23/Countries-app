import "../styles/CountriesGrid.css";
import { useState, useEffect } from "react";
import { getAllCountries } from "../services/petitions";
import CountryBox from "./CountryBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CountriesGrid = () => {
  const [countries, setCountries] = useState([]);
  const [pageNumber, setPageNumber] = useState(JSON.parse(localStorage.getItem("page")) || 1);
  const [sliceParam1, setSliceParram1] = useState(JSON.parse(localStorage.getItem("slice1")) || 0);
  const [sliceParam2, setSliceParram2] = useState(JSON.parse(localStorage.getItem("slice2")) || 4);
  const [loaderState, setLoaderState] = useState(true);

  useEffect(() => {
    const func = async () => {
      const res = await getAllCountries();
      setCountries(res.data)
    }
    func()
  }, []);

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(pageNumber));
    localStorage.setItem("slice1", JSON.stringify(sliceParam1));
    localStorage.setItem("slice2", JSON.stringify(sliceParam2));
  }, [pageNumber, sliceParam1, sliceParam2])

  const next = () => {
    setPageNumber(prevState => prevState + 1);
    setSliceParram1(prevState => prevState + 4);
    setSliceParram2(prevState => prevState + 4)
  };

  const prev = () => {
    if (pageNumber > 1) {
      setPageNumber(prevState => prevState - 1);
    setSliceParram1(prevState => prevState - 4);
    setSliceParram2(prevState => prevState - 4)
    }
  };

  const list = countries.map((item) => <CountryBox key={item.name} name={item.name} region={item.region} flag={item.flag} />);

  setTimeout(() => {
    setLoaderState(false);
  }, 1500);

  return (
    <>
    {loaderState
    ? <div className="preloader"></div>
    : <div className="countries-main-container">
        <div>
          <h1>All Countries</h1>
        </div>
        <div className="grid-main-container">
          <div className="nav-buttons-container">
            <FontAwesomeIcon icon={faChevronLeft} className="icon" onClick={prev}/>
          </div>
        <div className="grid">
          {list.slice(sliceParam1,sliceParam2)}
        </div>
        <div className="nav-buttons-container">
          <FontAwesomeIcon icon={faChevronRight} className="icon"  onClick={next}/>
        </div>
        </div>
        <div>
          {pageNumber}
        </div>   
      </div>
    }
    </>
  )
};

export default CountriesGrid