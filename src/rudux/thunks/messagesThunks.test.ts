import { loadMessagesThunk } from "./messagesThunks";

describe("Civen a loadMessagesThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await loadMessagesThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
