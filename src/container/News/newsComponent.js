import React, { Component } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import classes from "./newsComponent.module.css";

class newsComponent extends Component {
  state = {
    res: null,
    loading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=vri91e3U2631TYqmb5mumUDClBChoNSctgL5CDg3"
      )
      .then((res) => {
        this.setState({ res: res.data, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let page = <h1>Loading</h1>;
    if (!this.state.loading) {
      page = (
        <div className={classes.main}>
          <div className={classes.playcard}>
            <p className={classes.date}>{this.state.res.date}</p>
            <h4 className={classes.date}>NEWS OF THE DAY</h4>
            <div className={classes.card}>
              <h2 style={{ fontFamily: "sans-serif", padding: "10px" }}>
                {this.state.res.title}
              </h2>
              <p
                style={{
                  fontFamily: "monospace",
                  width: "auto",
                  fontSize: "1.35em",
                }}
              >
                {this.state.res.explanation}
              </p>
              <img className={classes.nasaImage} src={this.state.res.url} />
            </div>
          </div>
          <br />
        </div>
      );
    }
    return (
      <div className={classes.MainNewsComponent}>
        <NavBar />
        {page}
      </div>
    );
  }
}

export default newsComponent;
