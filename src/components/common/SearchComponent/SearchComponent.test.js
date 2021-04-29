import { shallow } from "enzyme";
import SearchComponent from "./SearchComponent";

describe("SearchComponent", () => {
  const props = {
    onSearchClick: jest.fn(),
  };

  const wrapper = shallow(<SearchComponent {...props} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call the onClick function", () => {
    expect(props.onSearchClick.mock.calls).toHaveLength(0);
    wrapper.find("button").simulate("click");
    expect(props.onSearchClick.mock.calls).toHaveLength(1);
  });
});
