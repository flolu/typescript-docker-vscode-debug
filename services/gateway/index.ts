import * as express from "express";
import axios from "axios";

const app = express();

app.get("/hello", async (req, res) => {
  try {
    const response = await axios.post("http://hello:3000/hello", req.body);
    res.send(response.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("**", (req, res) => {
  res.send("Hello from the gateway service");
});

app.listen(3000);
