const reducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case "CHANGE_LOADING":
          const test = {...state, loading: false};
        return state = test;
      default:
        return state;
    }
  };

  export default reducer;