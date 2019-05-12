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

//reading the description jsons and writing page
app.get("/projects/:name/description", (req, res) => {
    let descrData = require(`${projectsPath}/${
        req.params.name
    }/description.json`);

    for (var e in files) {
        if (files[e].name == req.params.name) {
            files[e].current = true;
        } else {
            files[e].current = false;
        }
    }
    console.log(files);
    res.render("projectDescr", {
        layout: "main",
        files: files,
        projectName: descrData.name,
        description: descrData.description
    });
});

//handling all known pages
app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        files: files
    });
});

//handling of unfound pages
app.use(function(req, res) {
    res.status(404).send("That's a 404");
});

app.listen(8080, () => {
    console.log("I'm listening");
});
