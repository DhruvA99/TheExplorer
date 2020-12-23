import React from "react";
import NavBar from "../NavBar/NavBar";
import classes from "./Home.module.css";

class Home extends React.Component {
  render() {
    return (
      <div className={classes.HomeContainer}>
        <NavBar />
        <div className={classes.topText}>
          <h4>DISCOVER THE STELLAR</h4>
        </div>
        <div>
          <h1 className={classes.upperMainText}>THE</h1>
          <h1 className={classes.lowerMainText}>EXPLORER</h1>
        </div>
        <div className={classes.lowerText}>Dhruv Arora</div>
      </div>
    );
  }
}

export default Home;
