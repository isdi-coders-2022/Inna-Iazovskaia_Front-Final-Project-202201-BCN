import actionsTypes from "../../actions/actionsTypes";
import userReduser from "./userReducer";

describe("Given a userReducer function", () => {
  describe("When it receives current user with username 'Tom' and login-user action with user 'Lila'", () => {
    test("Then it should retern user 'Lila'", () => {
      const currentUser = {
        username: "Tom",
        password: "",
        token: "",
        loggedIn: false,
      };
      const newUser = {
        username: "Lila",
        password: "",
        token: "",
        loggedIn: false,
      };
      const action = {
        type: actionsTypes.userLogin,
        user: newUser,
      };
      const expectedUser = {
        username: "Lila",
        password: "",
        token: "",
        loggedIn: false,
      };

      const user = userReduser(currentUser, action);

      expect(user).toEqual(expectedUser);
    });
  });

  describe("When it doesn't receive user and action", () => {
    test("Then it should return initialData", () => {
      const initialUserData = {
        username: "",
        password: "",
        token: "",
        loggedIn: false,
      };
      const currentUser = undefined;
      const action = {
        type: "",
      };

      const user = userReduser(currentUser, action);

      expect(user).toEqual(initialUserData);
    });
  });
});
