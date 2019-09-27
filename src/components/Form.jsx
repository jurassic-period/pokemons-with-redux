import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/action';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-offset-3 col-8 offset-md-3 form-wrapper ">
            <form action="">
                <label for="form-name">Name:</label>
                <input id="form-name" type="text" name="name"/>
                <label for="post-name">Mail:</label>
                <input id="post-name" type="text" name="name"/>
                <label for="message-name">Massage:</label>
                <input id="massage-name" type="text" name="name"/>
                <a href="#">Send</a>
            </form>
        </div>
    );
  }
}

export default Form;