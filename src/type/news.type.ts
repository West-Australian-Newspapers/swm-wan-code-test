export interface NewsData {
  articles: News[];
}
export interface News {
  id: string;
  byline: Byline;
  head: string;
  teaser: string;
  image: string;
}
export interface Byline {
  text: string;
}
export interface NewsProps {
  news: News;
}
