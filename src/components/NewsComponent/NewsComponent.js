import SearchComponent from "../SearchComponent/SearchComponent";
import NewsItemCard from "../NewsItemCard/NewsItemCard";
import "./NewsComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { saveArticle } from "../../state/actions/saveNewsActions";

const NewsComponent = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  const filteredArticles = articles.slice(0, 10);

  const getNews = (searchQuery) => {
    const url =
      "https://newsapi.org/v2/everything?" +
      "q=" +
      encodeURI(searchQuery) +
      "&from=2021-04-27&" +
      "sortBy=popularity&" +
      "apiKey=bac219e4c3f3440baf15916b96454ffe";
    let result = fetch(url)
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
