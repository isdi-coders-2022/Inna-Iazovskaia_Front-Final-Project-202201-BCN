import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
