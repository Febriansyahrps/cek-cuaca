const initState = {
  weather: {},
  loading: true,
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return {
        ...state,
        weather: action.payload.weather,
        loading: false,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        weather: action.payload.searched,
      };
    case "LOADING_DATA":
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};

export default weatherReducer;
