import { shallow } from "enzyme";
import NewsItemCard from "./NewsItemCard";

describe("NewsItemCard", () => {
  const props = [
    {
      title: "Showcases Today’s South Korean Fashion",
      author: "Hahna Yoon",
      content:
        "Ms. Choi credited a Korean television series called Reply, about a group of friends in the 80s and 90s. The three-part drama, one of the most successful shows from 2012 to 2016",
      url:
        "https://www.nytimes.com/2021/04/24/style/minari-fashion-vintage.html",
    },
  ];

  it("should render correctly", () => {
    const wrapper = shallow(<NewsItemCard articles={props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
