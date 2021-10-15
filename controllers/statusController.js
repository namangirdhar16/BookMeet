const User = require("../models/user");
const Meeting = require("../models/meeting");

const status = (req, res) => {
    return res.render("status")
}

const employee = async (req, res) => {
    try {
        const meetings = await Meeting.find({}).populate("manager");
        return res.render("employee", {
            meetings
        });
    }
    catch(err) {
        return console.error(err);
    }
}
const setFormDate= () => {
    
    const obj = {};
    var date = new Date();
    date.setDate(date.getDate() + 7);
    var date2 = new Date();
    date.setDate(date.getDate());
    const max = date.toISOString().slice(0, 10)
    obj.max = max;
    const min = date2.toISOString().slice(0, 10);
    obj.min = min, obj.max = max, obj.curr = min;
    return obj;
   
}
const manager = (req, res) => {
    
   // return res.render("manager");
    return res.render("manager", {
         setDate: setFormDate()
    });
}
const appointments = async (req, res) => {
    try {
        const appointments = await Meeting.find({employee: req.params.id}).populate("manager");
        return res.render("appointments", {
            appointments
        })
    }
    catch(err) {
       return console.error(err);
    }
}
const unbook = async (req, res) => {
    try {
       const meet = await Meeting.findById(req.params.id);
       meet.booked = false;
       meet.employee = undefined;
       const user = await User.findById(req.user.id);
       user.meet = user.meet.filter((m) => m._id.toString() != req.params.id)
       await user.save();
       await meet.save();
       req.flash("success", "Appointment deleted!!");
       return res.redirect("back");
    }
    catch (err) {
        req.flash("error", err);
        return console.error(err);
    }
}
module.exports = {
    status, employee, manager, appointments, unbook
}