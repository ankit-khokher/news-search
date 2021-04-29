import { shallow } from "enzyme";
import AppHeader from "./AppHeader";

describe("AppHeader", () => {
  const wrapper = shallow(<AppHeader />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have image", () => {
    const img = wrapper.find("img");
    expect(img).toHaveLength(1);
  });
});
