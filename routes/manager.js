const express = require("express");
const Router = new express.Router();
const managerController = require("../controllers/managerController");
const checkAuthenticated = require("../middleware/checkAuthenticated");
const isManager = require("../middleware/isManager");

Router.get("/", isManager, managerController.manager);
Router.post("/schedule/:id", managerController.schedule);
module.exports = Router;