import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { loading } from "../redux/actions";
import Header from "./Header";
import Form from "./Form";

const LIMIT_PER_PAGE = 20;

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0
    };

    this.toChangeUrl = this.toChangeUrl.bind(this);
  }

  toChangeUrl(page) {
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

    return (
      <div className="container">
        <Header />
        {!this.props.pokemonsArr[0] ? (
          <div>loading... </div>
        ) : (
          <div className="row">
            {this.props.pokemonsArr.map(el => (
              <Card el={el} key={el.name} />
            ))}
            <Pagination
              toChangeUrl={this.toChangeUrl}
              amountPage={amountPage}
              stateFromMainComp={this.state}
            />
            <Form />
          </div>
        )}
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
