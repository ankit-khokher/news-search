import saveArticle from "../constants/actionType";

const initialState = {
  articles: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case saveArticle:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
