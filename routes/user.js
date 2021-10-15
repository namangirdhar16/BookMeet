const express = require("express");
const Router = new express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");
const checkAuthenticated = require("../middleware/checkAuthenticated");

Router.use("/status", require("./status.js"));
Router.use("/meeting", require("./meeting.js"));
Router.get("/", checkAuthenticated, userController.main);
Router.get("/sign-in", userController.signIn);
Router.get("/sign-up", userController.signUp);
Router.get("/status", checkAuthenticated, userController.status);
Router.get("/logout", userController.logout);


Router.post("/create", userController.create);

Router.post("/create-session", passport.authenticate(
    'local',
    {failureRedirect: "/user/sign-in"}), userController.createSession)

module.exports = Router;