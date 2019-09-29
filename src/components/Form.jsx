import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userFeedback } from "../redux/actions";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  render() {
    return (
      <div className="col-md-10 form-wrapper mx-auto">
        <form>
          <h2>Feedback form</h2>
          <div className="d-flex justify-content-around inputs-block">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
            <label htmlFor="email">Mail</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <textarea
            name="comment"
            id="message"
            placeholder="Put your message"
            onChange={e => {
              this.setState({ message: e.target.value });
            }}
          ></textarea>
          <button
            type="button"
            onClick={() =>
              this.props.feedback(
                this.state.name,
                this.state.email,
                this.state.message
              )
            }
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    feedback: (name, email, message) =>
      dispatch(userFeedback(name, email, message))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
