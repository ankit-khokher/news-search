import "./NewsItemCard.css";

const NewsItemCard = (props) => {
  return (
    <div className="News-article">
      {props.articles.map((article, index) => (
        <div className="item" key={index}>
          <h2 className="title">{article.title}</h2>
          <label className="author"> {article.author}</label>
          <p className="content">{article.content.substring(0, 150)}</p>
          <a href={article.url}>{article.url}</a>
        </div>
      ))}
    </div>
  );
};

export default NewsItemCard;
