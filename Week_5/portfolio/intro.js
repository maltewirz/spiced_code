const fs = require("fs");
const dirStr = __dirname + "/projects";

function create(cb) {
    fs.readdir(dirStr, { withFileTypes: true }, (err, files) => {
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

        //callback handling
        if (err) {
            cb(err);
        } else {
            cb(null, finalHtml);
        }
    });
}

module.exports.create = create;
