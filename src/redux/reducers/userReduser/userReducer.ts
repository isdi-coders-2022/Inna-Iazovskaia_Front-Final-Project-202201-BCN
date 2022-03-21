import { AnyAction } from "redux";
import { UserLoginInterface } from "../../../types/Interfaces";
import actionsTypes from "../../actions/actionsTypes";

const initialUserData = {
  username: "",
  password: "",
  token: "",
  loggedIn: false,
};

const userReducer = (
  user: UserLoginInterface = initialUserData,
  action: AnyAction
) => {
  let newUser;

  switch (action.type) {
    case actionsTypes.userLogin:
      newUser = { ...action.user };
      break;

    default:
      newUser = { ...user };
  }

  return newUser;
};

export default userReducer;
