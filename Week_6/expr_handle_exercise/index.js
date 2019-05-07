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
    // console.log(descrData.name);
    // console.log(descrData.description);
    res.render("projectDescr", {
        layout: "projects",
        name: fileNames,
        projectName: descrData.name,
        description: descrData.description
    });
});

app.get("/projects/", (req, res) => {
    res.render("projectHome", {
        layout: "projects",
        name: fileNames
    });
});

app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        name: fileNames
    });
});

app.listen(8080, () => {
    console.log("I'm listening");
});
