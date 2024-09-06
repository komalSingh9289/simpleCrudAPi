const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./Routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello world its node js");
});

mongoose
  .connect(
    "mongodb+srv://komal001singh002:lGrXsqkRPaVMhmsY@backendapi.0jwan.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendApi"
  )
  .then(() => {
    console.log("connected to the database");
    app.listen(8000, () => {
      console.log("hello world its node js");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
