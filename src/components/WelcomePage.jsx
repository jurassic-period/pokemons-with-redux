import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/action';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.actions)
    return (
        <NavLink onClick={() => this.props.actions} to="/main" className="passive"><i className="fas fa-basketball-ball fa-spin"></i></NavLink>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}; 
};

export default connect(mapDispatchToProps)(WelcomePage);