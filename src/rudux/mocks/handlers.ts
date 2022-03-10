import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_FINDME}messages/all`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          date: "",
          text: "Hello!",
          sender: "",
          recipient: "",
        },
        {
          date: "",
          text: "How are you?",
          sender: "",
          recipient: "",
        },
      ])
    )
  ),
];
