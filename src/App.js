import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home/Home";
import Footer from "./components/Footer/Footer";
import AsteroidComponent from "./container/Asteroid/Asteroid";
import NewsComponent from "./container/News/newsComponent";
import Slider from "./components/Slider/Slider";

function App() {
  const mainPage = () => (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
  return (
    <div className="App">
      <div className="slider">
        <Slider />
      </div>

      <Switch>
        <Route exact path="/" component={mainPage} />
        <Route exact path="/news" component={NewsComponent} />
        <Route exact path="/asteroid" component={AsteroidComponent} />
      </Switch>
    </div>
  );
}

export default App;
