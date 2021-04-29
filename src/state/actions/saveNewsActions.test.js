import mockArticles from "../reducers/news.test";
import { saveArticle } from "./saveNewsActions";

describe("saveNewsActions", () => {
  it("saveArticle", () => {
    const payload = {
      articles: mockArticles,
    };
    const action = saveArticle(payload);
    expect(action).toEqual({
      payload: payload,
      type: "SAVE_ARTICLE",
    });
  });
});
