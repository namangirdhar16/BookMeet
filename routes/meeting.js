const express = require("express");

const Router = new express.Router();
const meetingController = require("../controllers/meetingController.js");

Router.get("/delete/:id", meetingController.deleteMeet) 
Router.get("/book/:id", meetingController.bookPage)
Router.post("/book/:id", meetingController.book);
module.exports = Router;