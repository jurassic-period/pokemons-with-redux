export function loading(offset, limit) {
  return async dispatch => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
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
    const { count } = dataUrl;

    dispatch({ type: "FULL_DATA_POKEMONS", dataAllPokemons });
    dispatch({ type: "AMOUNT_POKEMONS", count });
  };
}

export function userFeedback(name, email, message) {
  return dispatch => {
    const user = { name: name, email: email, message: message };
    dispatch({ type: "USER_FEEDBACK", user });
  };
}
