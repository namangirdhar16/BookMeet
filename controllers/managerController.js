const User = require("../models/user");
const Meeting = require("../models/meeting");

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
const manager = async (req, res) => {
    try {
        const slots = await Meeting.find({manager: req.user.id}).populate("employee")
        if(!slots) slots = [];
        return res.render("manager", {
              setDate: setFormDate(),
              slots
         });
    }
    catch(err) {
        return console.error(err);
    }
    
}

const schedule = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { start, end, date } = req.body;
        const timing = { start, end };
        if(user) {
            const newMeet = {
                start, end, date, manager: user._id
            }
            const meeting = await Meeting.create(newMeet);
            
            user.meet.push(meeting.id);
            await user.save();
            return res.redirect("back");
            return console.log(newMeet);

        }
        else return res.redirect("back");

    }
    catch(err) {
        return console.error(err);
    }
    console.log(req.body);

    return res.send("schedule page");
}
module.exports = {
    manager, schedule
}