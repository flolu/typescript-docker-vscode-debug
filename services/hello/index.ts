import * as express from "express";

const app = express();

app.post("**", (req, res) => {
  res.send("Hello from the hello service!");
});

app.listen(3000);
