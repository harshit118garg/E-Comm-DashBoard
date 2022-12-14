const express = require("express");
/* important packages */
const dotenv = require("dotenv");
const cors = require("cors");
/* database connection */
const connectToDataBase = require("./dbconn/conn");
/* schemas */
const users = require("./schemas/usersDB");
const products = require("./schemas/productsDB");
/* port */
const PORT = process.env.PORT || 5000;

const app = express();

dotenv.config();
connectToDataBase();

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("app is up & running");
});

app.get("/products", async (req, res) => {
  let allProducts = await products.find();
  if (allProducts.length > 0) {
    res.send(allProducts);
  } else {
    res.send({ result: "No Products Found" });
  }
});

app.post("/addproduct", async (req, res) => {
  let newProduct = new products(req.body);
  let result = await newProduct.save();
  res.send(result);
});

app.delete("/product/:id", async (req, res) => {
  try {
    const result = await products.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    console.log(`an unexpected error has occured`);
  }
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
