import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import CountriesGrid from "./CountriesGrid";
import Country from "./Country";
import Error from "./Error";

const Home = () => {
  return (
    <>
      <Router>
        <Header/>
        <div className="main-container">
        <Switch>
          <Route exact path="/" component={CountriesGrid}/>
          <Route exact path="/:name" component={Country}/>
          <Route path="*" component={Error}/>
        </Switch>
        </div>
      </Router>
    </>
  )
};

export default Home