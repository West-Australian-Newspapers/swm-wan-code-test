import React from "react";
import { NewsProps } from "../../type/news.type";
import LazyLoadImage from "../LazyLoadImage/LazyLoadImage";
import { resolveImagePath } from "../../utils"
import "./Card.css";

const NewsCard: React.FC<NewsProps> = ({ news }) => {
  //console.log("news", news.image);

  const { image = "", head = "", teaser, byline } = news;
  const { text } = byline;

  return (
    <div className="news-card">
      <LazyLoadImage
        src={resolveImagePath(image)}
        alt={head}
        className="news-image"
        placeholderSrc="/images/placeholder.png" // its a placeholder image path
      />
      <div className="news-content">
        <h2 className="news-title">{head}</h2>
        <p className="news-teaser">{teaser}</p>
        <p className="news-author">
          <em>{text}</em>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
