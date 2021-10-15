const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 8000;
const passport = require("passport");
const db = require("./config/db.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = new require("connect-mongo");
const passportLocal = require("./config/passport.js");
app.use(expressLayouts);
const flash = require("connect-flash");
const connectFmware = require("./middleware/connectFmware");

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(session({
    name: 'Feelprivacytask',
    secret: 'somesecret',
    saveUninitialized: false,
    resave: false,
    cookie: {
       maxAge: (1000 * 60 * 100)
    }, 
    store: MongoStore.create({
       mongoUrl: 'mongodb://localhost/feelprivacytask',
       autoRemove: 'disable'
    })
 }))

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static('./assets'));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(connectFmware.setFlash);
app.use("/", require("./routes/index"));

app.listen(port, () => {
    console.log(`server is up and running on port: ${port}`);
})