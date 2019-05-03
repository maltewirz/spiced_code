const fs = require("fs");
const dirStr = __dirname + "/projects";

function create(cb) {
    fs.readdir(dirStr, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
        }
        let front = `<!DOCTYPE html><html lang="en" dir="ltr">
            <head><meta charset="utf-8" /><title>Portfolio</title>
            </head><body><ul>`;
        let html = "";
        let back = `</ul></body></html>`;
        for (let i = 0; i < files.length; i++) {
            html += `<li><a href="/${files[i].name}/">${
                files[i].name
            }</a></li>`;
        }
        let finalHtml = front + html + back;
        return finalHtml;
    });
}

module.exports.create = create;

// Hints David:
// check for error, if there is an error, then call the cb and pass it the error. and if no error, then cb with null and second with good stuff.
