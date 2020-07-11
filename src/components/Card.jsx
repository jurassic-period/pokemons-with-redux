import React from "react";
import img from "./hide-image.jpg";
import history from "../history";

class Card extends React.Component {

  upperFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

  showPokemonPage = (name) => () => history.push("/pokemon-page/" + name);

  render() {
    const { name, sprites } = this.props.el;
    return (
      <div
        className="col-lg-3 col-sm-4 col-6 card"
        onClick={this.showPokemonPage(name)}
      >
        <div>
          <p className="text">{this.upperFirstLetter(name)}</p>
        </div>
        <div className="images">
          {sprites.front_default ? (
            <img src={sprites.front_default} alt="" />
          ) : (
            <img className="hide-img" src={img} alt="" />
          )}
          {sprites.back_default && (
            <img
              src={sprites.back_default}
              alt=""
              className="second-img"
            />
          )}
        </div>
      </div>
    );
  }
}

export default Card;
