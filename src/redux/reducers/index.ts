import { combineReducers } from "redux";
import currentMessageReducer from "./currentMessageReducer/currentMessageReducer";
import messagesReducer from "./messagesReducer/messagesReducer";

const rootReducer = combineReducers({
  messages: messagesReducer,
  message: currentMessageReducer,
});

export default rootReducer;
