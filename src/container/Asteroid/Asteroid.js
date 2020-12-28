import React from "react";
import Navbar from "../NavBar/NavBar";
import axios from "axios";
import Table from "../../components/Table/Table";
import DatePicker from "react-datepicker";
import classes from "./Asteroid.module.css";
import AsteroidWelcome from "../../components/AsteroidWelcome/AsteroidWelcome";
import Loader from "../../components/Loader/Loader";

class Asteroid extends React.Component {
  state = {
    res: null,
    error: null,
    loading: true,
    todayDate: new Date(),
    startDate: null,
    enddate: null,
    DateSelected: false,
  };

  formatDate(date) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  onDateSubmit = () => {
    if (this.state.startDate && this.state.enddate) {
      this.setState({ DateSelected: true });
      const sd = this.formatDate(this.state.startDate);
      const ed = this.formatDate(this.state.enddate);
      axios
        .get(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=${sd}&end_date=${ed}&api_key=vri91e3U2631TYqmb5mumUDClBChoNSctgL5CDg3`
        )
        .then((res) => {
          this.setState({ res: res.data, loading: false });
        })
        .catch((err) => {
          console.log(err);
          alert(
            "There is an error in retrieving data for given dates.Please try a different combination of starting and ending dates"
          );
        });
    } else {
      alert("Please select Start Date and End Date");
    }
  };

  buttonHandler = () => {
    this.setState({ DateSelected: false });
  };

  onStartDateChangeHandler = (date) => {
    this.setState({ startDate: date });
  };
  onEndDateChangeHandler = (date) => {
    this.setState({ enddate: date });
  };

  render() {
    let datePicker = <div></div>;
    let post = <Loader />;
    let mainData = [];
    let Header = [];
    if (!this.state.DateSelected) {
      datePicker = (
        <div>
          <div>
            <h3 style={{ color: "white", fontFamily: "sans-serif" }}>
              Start Date
            </h3>
            <DatePicker
              placeholderText="Click to select Date"
              dateFormat="dd-MM-yyyy"
              className={classes.datepicker}
              selected={this.state.startDate}
              onChange={(date) => {
                this.onStartDateChangeHandler(date);
              }}
            />
          </div>
          <div>
            <h3 style={{ color: "white", fontFamily: "sans-serif" }}>
              End Date
            </h3>
            <DatePicker
              placeholderText="Click to select Date"
              dateFormat="dd-MM-yyyy"
              className={classes.datepicker}
              selected={this.state.enddate}
              onChange={(date) => {
                this.onEndDateChangeHandler(date);
              }}
            />
          </div>
        </div>
      );
    }

    if (!this.state.loading) {
      for (var item in this.state.res.near_earth_objects) {
        let midData = [];
        var data1 = this.state.res.near_earth_objects[item];
        Header = [
          "S.no",
          "Name",
          "ID",
          "Hazardeous",
          "Closest Approach Date",
          "Closest Approach Distance(am)",
          "Estimated Diameter(min)[km]",
          "Estimated Diameter(max)[km]",
        ];

        data1.map((key) => {
          let tempData = {
            date: item,
            link: key.nasa_jpl_url,
            name: key.name,
            id: key.id,
            close_approach_date:
              key.close_approach_data[0].close_approach_date_full,
            closest_approach_distance:
              key.close_approach_data[0].miss_distance.astronomical,
            isHazardeous: key.is_potentially_hazardous_asteroid,
            estimated_dia_min:
              key.estimated_diameter.kilometers.estimated_diameter_min,
            estimated_dia_max:
              key.estimated_diameter.kilometers.estimated_diameter_max,
          };
          midData = [...midData, tempData];
        });
        mainData.push(midData);
      }
      post = <Table mainData={mainData} Header={Header} />;
    }

    return (
      <div className={classes.mainAsteroid}>
        <Navbar />
        {!this.state.DateSelected ? <AsteroidWelcome /> : null}
        {!this.state.DateSelected ? <div>{datePicker}</div> : null}
        {!this.state.DateSelected ? (
          <button className={classes.button} onClick={this.onDateSubmit}>
            Find!
          </button>
        ) : null}
        {this.state.DateSelected ? (
          <button className={classes.button} onClick={this.buttonHandler}>
            {" "}
            <strong>&#8630;</strong> Go Back
          </button>
        ) : null}
        {this.state.DateSelected ? (
          <div className={classes.infoTable}>{post}</div>
        ) : null}
      </div>
    );
  }
}

export default Asteroid;
