const Meeting = require("../models/meeting.js");
const User = require("../models/user.js");

const deleteMeet = async (req, res) => {
   
    try {
       const user = await User.findById(req.user.id);
       console.log(user.meet);
    //    for(m of user.meet) console.log(m._id.toString());
       user.meet = user.meet.filter((m) => m._id.toString() != req.params.id)
       const meeting = await Meeting.findById(req.params.id);
       const user2 = await User.findById(meeting.employee);
       user2.meet = user2.meet.filter((m) => m._id.toString() != req.params.id)
       await user2.save();
       await user.save();
       await Meeting.findByIdAndDelete(req.params.id);
       res.redirect("back");
    }
    catch(err) {
       return console.error(err);
    }
}

const bookPage = (req, res) => {
    return res.render("bookPage", {
        meetingId: req.params.id
    })
    
}
const book= async (req, res) => {
    try {
        const meeting = await Meeting.findById(req.params.id);
        console.log(meeting.booked);
        if(meeting.booked === true) {
            console.log("error");
            req.flash("error", "This meeting is already booked!!");
            return res.redirect("/user/status/employee");
        }
        meeting.booked = true;
        meeting.employee = req.user.id;
        const user = await User.findById(req.user.id);
        user.meet.push(meeting.id);
        await user.save();
        await meeting.save();
        req.flash("success", "Meeting booked!")
        return res.redirect("/user/status/employee");
    }
    catch(err) {

        return console.error(err);
    }
}
module.exports = {
    deleteMeet, bookPage, book
}