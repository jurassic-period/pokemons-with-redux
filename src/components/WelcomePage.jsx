import React from "react";
import { NavLink } from "react-router-dom";

class WelcomePage extends React.Component {
  render() {
    return (
      <NavLink to="/main" className="passive">
        <i className="fas fa-basketball-ball fa-spin"></i>
      </NavLink>
    );
  }
}

export default WelcomePage;
