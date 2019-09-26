const reducer = (state = [], action) => {
  switch (action.type) {
    case "FULL_DATA_POKEMONS":
      console.log("state в редьюсере", state);
      return (state = [...state, action.dataAllPokemons]);
    default:
      return state;
  }
};

export default reducer;
