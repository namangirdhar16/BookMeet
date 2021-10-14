const express = require("express");
const Router = new express.Router();
const userController = require("../controllers/userController");


Router.get("/", userController.main);
Router.get("/sign-in", userController.signIn);
Router.get("/sign-up", userController.signUp);
Router.get("/status", userController.status);
module.exports = Router;