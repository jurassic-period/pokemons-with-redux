import React, { Component } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { loading } from "../redux/actions";
import Header from "./Header";
import Form from "./Form";

const LIMIT_PER_PAGE = 20;

class MainComponent extends Component {
  state = {
    offset: 0
  };

  toChangeUrl = (page) => {
    const apiPage = page * LIMIT_PER_PAGE - 20;
    this.setState({ offset: apiPage }, () =>
      this.props.pokemonsData(this.state.offset, LIMIT_PER_PAGE)
    );
  }

  componentDidMount() {
    this.props.pokemonsData(+this.state.offset, LIMIT_PER_PAGE);
  }

  render() {
    const amountPage = Math.ceil(this.props.countNum / LIMIT_PER_PAGE);
    const { pokemonsArr } = this.props;
    return (
      <div className="container">
        <Header />
        {pokemonsArr.length ? (
          <div className="row">
            {pokemonsArr.map(el => (
              <Card el={el} key={el.name} />
            ))}
            <Pagination
              toChangeUrl={this.toChangeUrl}
              amountPage={amountPage}
              stateFromMainComp={this.state}
            />
            <Form />
          </div>
        ) : <div>loading... </div>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pokemonsData: (offset, limit) => dispatch(loading(offset, limit))
  };
};
const mapStateToProps = state => {
  return {
    pokemonsArr: state.pokemons,
    countNum: state.count
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
