import SAVE_ARTICLE from "../actions/actionType";

const initialState = {
  articles: [],
};

function news(state = initialState, action) {
  switch (action.type) {
    case SAVE_ARTICLE:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
}

export default news;
