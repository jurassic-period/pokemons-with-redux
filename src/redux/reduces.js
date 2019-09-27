export const reducer = (state = [], action) => {
  switch (action.type) {
    case "FULL_DATA_POKEMONS":
      return action.dataAllPokemons;
    default:
      return state;
  }
};

export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "AMOUNT_POKEMONS":
      return action.count;
    default:
      return state;
  }
};
