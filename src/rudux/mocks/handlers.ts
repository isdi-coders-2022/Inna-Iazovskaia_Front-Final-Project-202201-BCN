import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_FINDME}messages/all`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        messages: [
          {
            date: "",
            text: "Hello!",
            sender: "",
            recipient: "",
            id: "1",
          },
          {
            date: "",
            text: "How are you?",
            sender: "",
            recipient: "",
            id: "2",
          },
        ],
      })
    )
  ),

  rest.delete(
    `${process.env.REACT_APP_API_FINDME}messages/delete/1`,
    (req, res, ctx) => res(ctx.status(200))
  ),

  rest.post(
    `${process.env.REACT_APP_API_FINDME}messages/create`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          date: "",
          text: "I am fine.",
          sender: "",
          recipient: "",
          id: "3",
        })
      );
    }
  ),
];
