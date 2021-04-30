import SAVE_NEWS from "./actionType";

const saveNews = (articles) => {
  return {
    type: SAVE_NEWS,
    payload: articles,
  };
};

export default saveNews;
