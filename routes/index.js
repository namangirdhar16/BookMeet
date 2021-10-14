const express = require("express");

const Router = new express.Router();

Router.get("/", (req, res) => {
    res.send("home");
})
Router.use("/user", require("./user"));

module.exports = Router;