import { SEARCH_RECIPE, ADD_SHOPPINGLIST, GET_RECIPE, DELETE_INGREDIENT, LIKED_RECIPES } from './actions/types';


const intialState = {
  data: [],
  recipe: {},
  shoppingList: [],
  likes: [],
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
    case ADD_SHOPPINGLIST:
      return {
        ...state,
        shoppingList: [...state.shoppingList, ...action.payload]
      };
    case LIKED_RECIPES:
      return {
        ...state,
        likes: [...state.likes, action.payload]
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        shoppingList: state.shoppingList.filter((list, index) => index !== 0 )
      };
    default:
      return state;
  }
};

export default reducer;
