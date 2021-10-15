const express = require("express");
const passport = require("passport");
const Router = new express.Router();

Router.get("/", (req, res) => {
    //return res.send("hello");
    return res.render("home.ejs");
})
Router.use("/user", require("./user"));

module.exports = Router;