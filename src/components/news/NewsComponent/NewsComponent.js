import SearchComponent from "../../common/SearchComponent/SearchComponent";
import NewsItemCard from "../NewsItemCard/NewsItemCard";
import "./NewsComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { saveArticle } from "../../../state/actions/saveNewsActions";
import { API_URL, SEARCH_QUERY_KEY } from "../../../util/AppConstants";

const NewsComponent = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const filteredArticles = articles ? articles.slice(0, 10) : [];

  const getNews = (searchQuery) => {
    let result = fetch(
      API_URL.replace(SEARCH_QUERY_KEY, encodeURI(searchQuery))
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch(saveArticle(result.articles));
      });
    return result.articles;
  };

  return (
    <div className="News-container">
      <h1>BT React Code Test - by Ankit Khokher - 27/04/21</h1>
      <SearchComponent onSearchClick={getNews} />
      <NewsItemCard articles={filteredArticles} />
    </div>
  );
};

export default NewsComponent;
