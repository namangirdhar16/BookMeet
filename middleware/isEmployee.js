const isEmployee = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.flash("error", "authenticate first");
        return res.redirect("back")
    }
        
    if(req.user.status == "Employee") return next();
    req.flash("error", "you are not an employee")
    return res.redirect("back");
}

module.exports = isEmployee;