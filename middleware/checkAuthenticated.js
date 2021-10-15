const checkAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    return res.redirect("/user/sign-in");
}

module.exports = checkAuthenticated;