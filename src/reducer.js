import { SEARCH_RECIPE } from './actions/types';


const intialState = {
  data: [],
  loading: false
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SEARCH_RECIPE:
      return {
        ...state,
        data: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
