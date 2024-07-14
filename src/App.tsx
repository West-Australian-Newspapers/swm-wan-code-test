import { NewsData, News } from "./type/news.type";
import NewsCard from "./components/Card/Card";
import newsData from "./news.json";
import "./App.css";

const data: NewsData = newsData;

function App() {
  const { articles = [] } = data;
  return (
    <div className="App">
      <div className="article-grid">
        {articles.map((news: News) => {
          const { id = "", head = "" } = news;
          const cardId = `${id}-${head}`; // This key attribute is used for a unique identifier in the Virtual DOM (VDOM)
          return <NewsCard key={cardId} news={news} />;
        })}
      </div>
    </div>
  );
}

export default App;
