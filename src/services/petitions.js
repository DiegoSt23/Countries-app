import axios from "axios";

const searchCountry = async (name) => {
  const promise = await axios ({
    method: "GET",
    url: `https://restcountries.eu/rest/v2/name/${name}`,
  })
  return promise
};

const getAllCountries = async () => {
  const promise = await axios ({
    method: "GET",
    url: "https://restcountries.eu/rest/v2/all",
  })
  return promise
};

const getWeather = async (lat, lon) => {
  const promise = await axios ({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f45251d3ea56d5b3855dcf77bcd6d099`,
  })
  return promise
};


export { searchCountry, getAllCountries, getWeather}