import React, { Component } from "react";
import history from "../history";
const URL = 'https://pokeapi.co/api/v2/pokemon/';

class PokemonPage extends Component {
  state = {
    loading: true,
    pokemonData: {}
  };

  async getData() {
    const { name } = this.props.match.params;
    const url = `${URL}${name}`;
    const responseUrl = await fetch(url);
    const dataUrl = await responseUrl.json();
    this.setState({ pokemonData: dataUrl, loading: false });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { pokemonData } = this.state;
    return (
      <div className="container">
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div className="row">
            <div className="col-6">
              {pokemonData.sprites.front_default ? (
                <img
                  className="individual__img"
                  src={pokemonData.sprites.front_default}
                  alt=""
                />
              ) : (
                <p>Sorry we havn't images of this pokemon</p>
              )}
            </div>
            <div className="col-6">
              {pokemonData.sprites.back_default && (
                <img
                  className="individual__img"
                  src={pokemonData.sprites.back_default}
                  alt=""
                />
              )}
            </div>
            <div className="col individual">
              <p className="individual__text">
                {pokemonData.name[0].toUpperCase() +
                  pokemonData.name.slice(1)}
              </p>
              <p>{"Waight: " + pokemonData.weight + "kg"}</p>
              <ul className="individual__list">
                Abilities:
                <li>
                  {"1. " + pokemonData.abilities[0].ability.name}
                </li>
                <li>
                  {pokemonData.abilities[1]
                    && "2. " + pokemonData.abilities[1].ability.name}
                </li>
              </ul>
              <p>
                {"Base experience: " + pokemonData.base_experience}
              </p>
            </div>
          </div>
        )}
        <div>
          <button
            className="individual__button"
            onClick={() => history.push("/main")}
          >
            Go back
          </button>
        </div>
      </div>
    );
  }
}

export default PokemonPage;
