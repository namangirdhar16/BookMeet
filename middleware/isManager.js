const isManager = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.flash("error", "authenticate first");
        return res.redirect("back");
    }
    if(req.user.status == "Manager") return next();
    req.flash("error", "you are not a manager")
    return res.redirect("back");
}

module.exports = isManager;