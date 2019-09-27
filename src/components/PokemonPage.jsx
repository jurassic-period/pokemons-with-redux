import React from "react";
import history from "../history";

class PokemonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      pokemonData: {}
    };
  }

  async toDownloadData() {
    const url = `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`;
    const responseUrl = await fetch(url);
    const dataUrl = await responseUrl.json();

    this.setState({ pokemonData: dataUrl, loading: false });
  }

  componentDidMount() {
    this.toDownloadData();
  }

  render() {
    // console.log("FromPokemonPageProps", this.props);

    return (
      <div className="container">
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div className="row">
            <div className="col-6">
              {this.state.pokemonData.sprites.front_default ? (
                <img
                  className="individual__img"
                  src={this.state.pokemonData.sprites.front_default}
                  alt="image"
                />
              ) : (
                <p>Sorry we havn't images of this pokemon</p>
              )}
            </div>
            <div className="col-6">
              {this.state.pokemonData.sprites.back_default ? (
                <img
                  className="individual__img"
                  src={this.state.pokemonData.sprites.back_default}
                  alt="image"
                />
              ) : null}
            </div>
            <div className="col individual">
              <p className="individual__text">
                {this.state.pokemonData.name[0].toUpperCase() +
                  this.state.pokemonData.name.slice(1)}
              </p>
              <p>{"Waight: " + this.state.pokemonData.weight + "kg"}</p>
              <ul className="individual__list">
                Abilities:
                <li>
                  {"1. " + this.state.pokemonData.abilities[0].ability.name}
                </li>
                <li>
                  {this.state.pokemonData.abilities[1]
                    ? "2. " + this.state.pokemonData.abilities[1].ability.name
                    : null}
                </li>
              </ul>
              <p>
                {"Base experience: " + this.state.pokemonData.base_experience}
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
