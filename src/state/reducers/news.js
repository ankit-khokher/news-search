import SAVE_NEWS from "../actions/actionType";

const initialState = {
  articles: [],
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NEWS:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default news;
