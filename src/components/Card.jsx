import React from "react";
import img from "./hide-image.jpg";
import history from "../history";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  toChangeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  toCallPokemonPage(name) {
    history.push("/pokemon-page/" + name);
  }

  render() {
    return (
      <div
        className="col-lg-3 col-sm-4 col-6 card"
        onClick={() => this.toCallPokemonPage(this.props.el.name)}
      >
        <div>
          <p className="text">{this.toChangeFirstLetter(this.props.el.name)}</p>
        </div>
        <div className="images">
          {this.props.el.sprites.front_default ? (
            <img src={this.props.el.sprites.front_default} alt="picture" />
          ) : (
            <img className="hide-img" src={img} alt="picture" />
          )}
          {this.props.el.sprites.back_default ? (
            <img
              src={this.props.el.sprites.back_default}
              alt="picture"
              className="second-img"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Card;
