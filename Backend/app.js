const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB_URL = "mongodb://127.0.0.1:27017/guideme";

mongoose.connect(DB_URL)
    .then(() => {
        console.log("connected to db");
    }).catch((err) => {
        console.log(err);
    });

app.get("/api", (req, res) => {
    res.send("working");
})

app.listen(5000, () => {
    console.log("server is listening to port 5000");
});