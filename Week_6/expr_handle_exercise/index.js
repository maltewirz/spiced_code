const express = require("express");
const hb = require("express-handlebars");
const app = express();
const projectsPath = __dirname + "/public/projects";
const fs = require("fs");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");
app.use(express.static("./public"));

//reading the file names in Sync
let files = fs.readdirSync(projectsPath, { withFileTypes: true });
let fileNames = [];
for (let i = 0; i < files.length; i++) {
    fileNames.push(files[i].name);
}

app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        name: fileNames
    });
});

// app.get("/:name", (req, res) => {
//     console.log(req.params.name);
// });

app.listen(8080, () => {
    console.log("I'm listening");
});
