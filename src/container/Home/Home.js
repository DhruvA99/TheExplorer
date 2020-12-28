import React from "react";
import NavBar from "../NavBar/NavBar";
import classes from "./Home.module.css";
import { CHECKLOAD_CHANGE } from "../../redux/actions/actionTypes";
import { connect } from "react-redux";

class Home extends React.Component {
  state = {
    animate: true,
  };

  componentDidMount() {
    if (!this.props.isCheckLoadTrue) {
      this.setState({ animate: true });
      this.props.changeCheckLoad();
    } else {
      this.setState({ animate: false });
    }
  }

  render() {
    let page = (
      <>
        {" "}
        <div className={classes.topText}>
          <h4>DISCOVER THE STELLAR</h4>
        </div>
        <div>
          <h1
            className={`${classes.upperMainText} ${
              this.state.animate ? classes.animateUpperText : null
            }`}
          >
            THE
          </h1>
          <h1
            className={`${classes.lowerMainText} ${
              this.state.animate ? classes.animateLowerText : null
            }`}
          >
            EXPLORER
          </h1>
        </div>
        <div className={classes.lowerText}>Dhruv Arora</div>
      </>
    );

    return (
      <div className={classes.HomeContainer}>
        <NavBar />
        {page}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  isCheckLoadTrue: store.checkLoad === true,
});

const mapDispatchToProps = (dispatch) => ({
  changeCheckLoad: () => {
    dispatch({ type: CHECKLOAD_CHANGE, payload: true });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
