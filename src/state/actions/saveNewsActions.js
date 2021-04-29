import { SAVE_ARTICLE } from "./actionType";

export function saveArticle(payload) {
  return { type: SAVE_ARTICLE, payload };
}
