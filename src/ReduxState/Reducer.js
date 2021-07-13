function reducer(state = null, action) {
    switch (action.type) {
      case "FETCH_DATA":
        return {
          ...action.data[0]
        };
      default:
        return state;
    }
  }
  
  export default reducer;