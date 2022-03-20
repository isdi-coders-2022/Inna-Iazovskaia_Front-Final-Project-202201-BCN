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

  rest.delete(
    `${process.env.REACT_APP_API_FINDME}messages/delete/2`,
    (req, res, ctx) => res(ctx.status(404))
  ),

  rest.post(
    `${process.env.REACT_APP_API_FINDME}messages/create`,
    (req, res, ctx) => {
      const text = req.body.text;
      if (text === "I am fine.") {
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
      } else {
        return res(
          ctx.status(404),
          ctx.json({
            error: true,
            messages: "Message not created",
          })
        );
      }
    }
  ),

  rest.put(
    `${process.env.REACT_APP_API_FINDME}messages/update/:id`,
    (req, res, ctx) => {
      const id = req.params.id;
      if (id === "125") {
        return res(
          ctx.status(200),
          ctx.json({
            date: "",
            text: "sorry",
            sender: "",
            recipient: "",
            id: "125",
          })
        );
      } else {
        return res(
          ctx.status(400),
          ctx.json({
            error: true,
            message: "Message not updated",
          })
        );
      }
    }
  ),

  rest.get(`${process.env.REACT_APP_API_FINDME}messages/153`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        messages: [
          {
            date: "",
            text: "Hello!",
            sender: "",
            recipient: "",
            id: "153",
          },
        ],
      })
    )
  ),

  rest.get(
    `${process.env.REACT_APP_API_FINDME}messages/undefined`,
    (req, res, ctx) =>
      res(
        ctx.status(404),
        ctx.json({
          error: true,
          messages: "Message not found",
        })
      )
  ),
];
