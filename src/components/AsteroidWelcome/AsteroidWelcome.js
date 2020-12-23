import React from "react";

import classes from "./AsteroidWelcome.module.css";

const asteroidWelcome = () => {
  return (
    <div className={classes.mainDiv}>
      <p className={classes.welcomeText}>WELCOME TO THE ASTROID WIKI</p>
      <h2 style={{ margin: "auto" }}>
        This service can provide data about various Asteroids based on their
        closest approach date to Earth
      </h2>

      <p style={{ paddingRight: 0, marginRight: 0 }}>
        Provide the details about the start Date and End Date and find all the
        asteroids from Nasa database
      </p>
      <h1 style={{ color: "white" }}>Get started!</h1>
      <br />
    </div>
  );
};

export default asteroidWelcome;
