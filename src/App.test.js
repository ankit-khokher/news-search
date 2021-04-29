import App from "./App";
import store from "../src/state/store";
import { Provider } from "react-redux";
import { shallow } from "enzyme";

describe("AppComponent", () => {
  it("should render the app component", () => {
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component.find(App).length).toBe(1);
  });
});
