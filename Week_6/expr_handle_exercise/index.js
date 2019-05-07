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

//reading the description jsons and writing page
app.get("/projects/:name/description", (req, res) => {
    let descrData = require(`${projectsPath}/${
        req.params.name
    }/description.json`);
    res.render("projectDescr", {
        layout: "main",
        name: fileNames,
        projectName: descrData.name,
        description: descrData.description
    });
});

//handling all known pages
app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        name: fileNames
    });
});

//handling of unfound pages
app.use(function(req, res) {
    res.status(404).send("That's a 404");
});

app.listen(8080, () => {
    console.log("I'm listening");
});
