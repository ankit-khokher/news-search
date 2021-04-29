import news from "./news";
import SAVE_ARTICLE from "../actions/actionType";

export const mockArticles = [
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "https://www.engadget.com/about/editors/richard-lawler",
    title: "What's on TV: 'Returnal' and 'Yasuke'",
    description:
      "This week we're looking forward to Netflix's new anime Yasuke, The Mitchells vs. the Machines and Returnal on PS5.",
    url: "https://www.engadget.com/returnal-yasuke-033750388.html",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2021-04/674017d0-a709-11eb-a97e-72897e85e3d0",
    publishedAt: "2021-04-27T03:37:50Z",
    content:
      "This week we're getting a true new-gen exclusive game, as Housemarque's Returnalarrives for the PlayStation 5. Players will become an astronaut fighting to survive on an alien planet and failing, ove… [+5434 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "India Covid-19: Deadly second wave spreads from cities to small towns",
    description:
      "The virus is spreading to remote corners of India where healthcare is poor and the crisis under-reported.",
    url: "https://www.bbc.co.uk/news/world-asia-india-56913047",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/0784/production/_118242910_gettyimages-1232538794.jpg",
    publishedAt: "2021-04-28T23:29:39Z",
    content:
      "By Vikas Pandey &amp; Shadab NazmiBBC News, Delhi\r\nimage copyrightGetty Images\r\nimage captionPatients breathe with the help of oxygen in an emergency roadside tent in Ghaziabad\r\nIndia's deadly Covid-… [+7592 chars]",
  },
];

describe("news", () => {
  it("should return articles", () => {
    const initialState = {
      articles: [],
    };
    const action = {
      type: SAVE_ARTICLE,
      payload: mockArticles,
    };
    const newState = news(initialState, action);
    expect(newState).toEqual({
      articles: mockArticles,
    });
  });
});
