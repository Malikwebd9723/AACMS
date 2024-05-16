const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const app = express();
const port = 8002;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const DbConnect = process.env.MONGO_DB_PASS;
mongoose
    .connect(`mongodb+srv://developer9723usman:${DbConnect}@cluster0.lemgu3v.mongodb.net/`)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDb", err.message);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


