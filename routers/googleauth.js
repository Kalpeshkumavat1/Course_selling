const {Router} =require('express');
const passport = require('passport');
const googleauth=Router();
googleauth.use(passport.session({secret:"secret",resave:false,saveUnintialized:true}))
googleauth.use(passport.initialize())
googleauth.use(passport.session());
googleauth.post('/',passport.authenticate("google",{scope:["profile","email"]}));
googleauth.post('/callback',passport.authenticate("google",{failureRedirect:"/"}),(req,res)=>{res.redirect('/dashboard')})
googleauth.get("/dashboard", (req, res) => {
    if (!req.isAuthenticated()) return res.redirect("/");
    res.send(`Hello ${req.user.displayName}, welcome to the dashboard!`);
});