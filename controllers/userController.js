const User = require("../models/user");

const main = (req, res) => {
    return res.send("main page");
}
const signIn = (req, res) => {
    return res.render("sigin")
}

const signUp = (req, res) => {
    if(req.isAuthenticated()) {
        return res.redirect("/status");
    }
    return res.render("signup");
}

const status = (req, res) => {
    return res.render("status")
}


const create = async (req, res) => {
    if(req.body.password != req.body.confirm_password) {
        console.log("password don't match!!")
        return res.redirect("back");
    }
    
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) {
            await User.create(req.body);
            return res.redirect("/user/sign-in");
        }
        else {
            console.log('not created');
            res.redirect("back");
        }

    }
    catch(err) {
        return console.error(err);
    }
}

const createSession = (req, res) => {
    console.log("hello");
   return res.redirect("/user/status");
}


const logout = (req, res) => {
    req.logout();
    res.redirect("/");
}
module.exports = {
    signIn, signUp, main, status, create, createSession, logout
}
