const express = require("express");
const app = express();

const port = 8000;


app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes/index"));

app.listen(port, () => {
    console.log(`server is up and running on port: ${port}`);
})