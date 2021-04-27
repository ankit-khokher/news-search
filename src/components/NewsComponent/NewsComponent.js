import SearchComponent from "../SearchComponent/SearchComponent";
import "./NewsComponent.css";
import NewsItemCard from "../NewsItemCard/NewsItemCard";

const NewsComponent = () => {
  return (
    <div className="News-container">
      <h1>BT React Code Test - by Ankit Khokher - 27/04/21</h1>
      <SearchComponent />
      <NewsItemCard />
    </div>
  );
};

export default NewsComponent;
