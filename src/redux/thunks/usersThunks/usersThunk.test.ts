import actionsTypes from "../../actions/actionsTypes";
import { userLoginThunk } from "./usersThunks";

describe("Given a userLoginThunk function", () => {
  describe("When it's called with username 'tom'", () => {
    test("Then it should call dispath and pass userLoginAction", async () => {
      const user = {
        username: "tom",
        password: "supertom",
        id: undefined,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvbSIsImlkIjoiNjIzODg5YmQ3MTA4MjBiZTk5YjFiYmE5IiwiaWF0IjoxNjQ3ODkyNzgyfQ.M0SJBi7wbrWbanr51QI4p90xXF24tGMEgg-L2Bmqu9Q",
        loggedIn: true,
      };
      const expectedAction = {
        type: actionsTypes.userLogin,
        user: user,
      };
      const dispatch = jest.fn();
      const navigate = jest.fn();

      const loginThunk = userLoginThunk(user, navigate);
      await loginThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's called with not wxisting username", () => {
    test("Then it should not dispath the function", async () => {
      const user = {
        username: "tim",
        password: "supertom",
        id: undefined,
        token: "",
        loggedIn: false,
      };
      const dispatch = jest.fn();
      const navigate = jest.fn();

      const loginThunk = userLoginThunk(user, navigate);
      await loginThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
