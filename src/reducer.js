import { SEARCH_RECIPE } from './actions/types';
import { GET_RECIPE } from './actions/types';


const intialState = {
  data: [],
  recipe: {},
  loading: false
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SEARCH_RECIPE:
      return {
        ...state,
        data: [...action.payload]
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: {...action.payload}
      };
    default:
      return state;
  }
};

export default reducer;
