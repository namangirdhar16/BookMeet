const express = require("express");
const Router = new express.Router();
const statusController = require("../controllers/statusController.js");
const checkAuthenticated = require("../middleware/checkAuthenticated");
const isEmployee = require("../middleware/isEmployee");
const isManager = require("../middleware/isManager");

Router.use("/manager", require("./manager"));
Router.get("/", checkAuthenticated, statusController.status);
Router.get("/employee", isEmployee, statusController.employee);
// Router.get("/employee/appointments/:id", statusController.appointments);
Router.get("/employee/unbook/:id", statusController.unbook);
module.exports = Router;