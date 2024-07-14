import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "./App";
import newsData from "./news.json";
import { NewsData } from "./type/news.type";

describe("App component", () => {
  test("renders without crashing", () => {
    render(<App />);
  });

  test("renders all news articles", () => {
    render(<App />);
    const data: NewsData = newsData;
    const { articles = [] } = data;

    articles.forEach((news) => {
      const { head = "" } = news;
      expect(screen.getByText(head)).toBeInTheDocument();
    });
  });

  test("renders articles with correct key", () => {
    render(<App />);
    const data: NewsData = newsData;
    const { articles = [] } = data;

    articles.forEach((news) => {
      const { id = "", head = "" } = news;
      const cardId = `${id}-${head}`;
      const articleElement = screen.getByText(head).closest('.news-card');
      console.log("articleElement", articleElement);
      
      expect(articleElement).toHaveAttribute('key', cardId);
    });
  });
});