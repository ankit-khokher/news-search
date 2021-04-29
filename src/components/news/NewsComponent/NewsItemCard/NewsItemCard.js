import "./NewsItemCard.css";

const NewsItemCard = (props) => {
  return (
    <div className="News-wrapper">
      {props.articles.map((article, index) => (
        <div className="News-item" key={index}>
          <h2 className="Title">{article.title}</h2>
          <label className="Author"> {article.author}</label>
          <p className="Content">{article.content.substring(0, 150)}</p>
          <a href={article.url}>{article.url}</a>
        </div>
      ))}
    </div>
  );
};

export default NewsItemCard;
