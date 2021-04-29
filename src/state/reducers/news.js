import saveArticle from "../actions/actionType";

const initialState = {
  articles: [],
};

function news(state = initialState, action) {
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

export default news;
