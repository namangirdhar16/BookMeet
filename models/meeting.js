const mongoose = require("mongoose");
const User = require("./user");

const meetingSchema = new mongoose.Schema({
    start: {
        type: String,
        required: true,
    }, 
    end: {
        type: String, 
        required: true
    },
    date: {
        type: String, 
        required: true,
    },
    booked: {
        type: Boolean,
        default: false,
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;