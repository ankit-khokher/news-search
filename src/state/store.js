import { createStore } from "redux";
import rootReducer from "./reducers/news";

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const store = createStore(rootReducer, enableReduxDevTools);

export default store;
