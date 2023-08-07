// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import mongoose from "mongoose";
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const productsRouter = require("./routes/products.cjs");
const cartRouter = require("./routes/cart.cjs");
const PORT = process.env.PORT || 3000;

const cors = require("cors");

async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
    console.log("Connected to db");
    app.listen(PORT, () => console.log("Server running on " + PORT));
  } catch (error) {
    console.log(error);
  }
}
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the mini-mood API");
});

app.use("/products", productsRouter);
app.use("/cart", cartRouter);

connect();
