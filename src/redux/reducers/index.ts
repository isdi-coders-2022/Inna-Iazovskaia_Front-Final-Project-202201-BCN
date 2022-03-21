import { combineReducers } from "redux";
import currentMessageReducer from "./currentMessageReducer/currentMessageReducer";
import messagesReducer from "./messagesReducer/messagesReducer";
import userReduser from "./userReduser/userReducer";

const rootReducer = combineReducers({
  messages: messagesReducer,
  message: currentMessageReducer,
  user: userReduser,
});

export default rootReducer;
