import { SAVE_ARTICLE } from "../constants/actionType";

export function saveArticle(payload) {
  return { type: SAVE_ARTICLE, payload };
}
