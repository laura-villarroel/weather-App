//importar actionsTYpe
import {
  GET_CARD,
  GET_DETAIL,
  DELETE,
  CLEAN_DETAIL,
} from '../actions/actionType';

const initialState = {
  cities: [],
  cityDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD:
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    case GET_DETAIL:
      return {
        ...state,
        cityDetail: state.cities.find(c => c.id === action.payload),
      };
    case DELETE:
      return {
        ...state,
        cities: state.cities.filter(c => c.id !== action.payload),
      };

    case CLEAN_DETAIL:
      return { ...state, cityDetail: action.payload };
    default:
      return state;
  }
};

export default reducer;
