const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./dbconn/productsDB");
const users = require("./dbconn/usersDB");
const PORT = process.env.PORT || 5000;

const app = express();

dotenv.config();
connectDB();

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("app is up & running");
});

app.post("/register", async (req, res) => {
  let newuser = new users(req.body);
  let result = await newuser.save();
  result = result.toObject();
  delete result.pass;
  res.send(result);
});

app.post("/login", async (req, res) => {
  try {
    if (req.body.pass && req.body.email) {
      let user = await users.findOne(req.body).select("-pass");
      if (user) {
        res.send(user);
      } else {
        res.send(`no user found`);
      }
    } else {
      res.send(`an unexpected error has occured`);
    }
  } catch (error) {
    console.log(`an unexpected error has occured`);
  }
});

app.listen(5000, () => {
  console.log(`app started at port ${PORT}`);
});
