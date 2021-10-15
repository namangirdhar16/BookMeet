const mongoose = require("mongoose");
const Meeting = require("./meeting");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }, 
    name: {
        type: String,
        required: true,
    }, 
    status: {
        type: String, 
        required: true,
        enum: ['Employee', 'Manager']
    },
    meet: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meeting"
        }
    ]
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);
module.exports = User;