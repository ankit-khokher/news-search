import mockArticles from "../reducers/news.test";
import saveNews from "./saveNewsActions";

describe("saveNewsActions", () => {
  it("saveNews", () => {
    const payload = {
      articles: mockArticles,
    };
    const action = saveNews(payload);
    expect(action).toEqual({
      payload: payload,
      type: "SAVE_NEWS",
    });
  });
});
