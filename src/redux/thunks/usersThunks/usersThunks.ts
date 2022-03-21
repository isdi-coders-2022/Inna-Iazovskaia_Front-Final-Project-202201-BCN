import { Dispatch } from "redux";
import jwtDecode from "jwt-decode";
import { userLoginAction } from "../../actions/actionsCreators";
import { UserLoginInterface } from "../../../types/Interfaces";
import toast from "react-hot-toast";
import { NavigateFunction } from "react-router-dom";

const notifyLogged = () => toast("You are logged!");

export const userLoginThunk =
  (user: UserLoginInterface, navigate: NavigateFunction) =>
  async (dispatch: Dispatch) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_FINDME}users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (response.ok) {
      const { token } = await response.json();
      const userData: UserLoginInterface = await jwtDecode(token);
      localStorage.setItem("token", token);
      const loggedUser = {
        username: user.username,
        password: user.password,
        id: userData.token,
        token: token,
        loggedIn: true,
      };
      dispatch(userLoginAction(loggedUser));
      notifyLogged();
      navigate("/conversations");
    }
  };
