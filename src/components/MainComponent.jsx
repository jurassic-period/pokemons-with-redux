import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const LIMIT_PER_PAGE = 20;

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      pokemonArr: [],
      offset: 0,
      count: 0
    };

    this.toChangeUrl = this.toChangeUrl.bind(this);
  }

  async toDownloadData() {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${this.state.offset}&limit=${LIMIT_PER_PAGE}`;
    const responseUrl = await fetch(url);
    const dataUrl = await responseUrl.json();
    const promises = [];

    for (let i = 0; i < dataUrl.results.length; i++) {
      const currentPokemonUrl = dataUrl.results[i].url;
      promises.push(fetch(currentPokemonUrl));
    }

    const responses = await Promise.all(promises);
    const dataAllPokemons = await Promise.all(
      responses.map(resp => resp.json())
    );
    this.setState({
      pokemonArr: dataAllPokemons,
      loading: false,
      count: dataUrl.count
    });
  }

  toChangeUrl(page) {
    const apiPage = page * LIMIT_PER_PAGE - 20;
    this.setState({ offset: apiPage }, this.toDownloadData);
  }

  componentDidMount() {
    this.toDownloadData();
  }

  render() {
    const amountPage = Math.ceil(this.state.count / LIMIT_PER_PAGE);
    return (
      <div className="container">
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div className="row">
            {this.state.pokemonArr.map(el => (
              <Card el={el} key={el.name} />
            ))}
            <Pagination
              toChangeUrl={this.toChangeUrl}
              amountPage={amountPage}
              stateFromMainComp={this.state}
            />
          </div>
        )}
      </div>
    );
  }
}

export default MainComponent;
