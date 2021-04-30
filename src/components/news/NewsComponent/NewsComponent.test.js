import { shallow } from "enzyme";
import { Provider } from "react-redux";
import NewsComponent from "./NewsComponent";
import store from "../../../state/store";

describe("NewsItemCard", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NewsComponent />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
