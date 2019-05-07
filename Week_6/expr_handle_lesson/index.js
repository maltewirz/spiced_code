const express = require("express");
const hb = require("express-handlebars");
const futuramaArray = require("./futuramadata.json");

const app = express();

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
    // console.log("sanity check 2");
    res.render("home", {
        layout: "main",
        siteName: "Futurama",
        characters: futuramaArray
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        layout: "main",
        characters: futuramaArray
    });
});

app.get("/:name", (req, res) => {
    console.log(req.params.name);
    res.render("character", {
        layout: "main",
        imgName: req.params.name,
        characters: futuramaArray
    });
});

app.listen(8080, () => {
    console.log(`I'm listening`);
});
