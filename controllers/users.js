const User = require("../models/user.js")


module.exports.signup =async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password)
        console.log(registeredUser);
        req.login(registeredUser, (err)=>{
            if (err) {
                return next(err);
            }
            req.flash("success", "Heyy, Welcome to Wanderlust!");
            res.redirect("/listings");
        })

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup")
    }
};

module.exports.login =async (req, res) => {
        req.flash("success", "Welcome back to Wanderlust!")
        let redirecturl=res.locals.redirectUrl || "/listings";

        res.redirect(redirecturl);
};

module.exports.logout =(req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You have successfully logged out!");
        res.redirect("/listings");
    })
};