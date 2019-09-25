const reducer = (state = [], action) => {
    switch (action.type) {
      case "FULL_DATA_POKEMONS":
        return state = [...state, action.dataAllPokemons];
      default:
        return state;
    }
  };

  export default reducer;