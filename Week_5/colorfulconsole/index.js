const http = require("http");
const querystring = require("querystring");
var chalk = require("chalk");

const server = http
    .createServer((req, res) => {
        req.on("error", err => {
            console.log("err ", err);
        });
        console.log(chalk.yellow(`I'm listening.`));

        if (req.method == "GET") {
            console.log("GET request...");
            res.setHeader("content-type", "text/html");
            res.statusCode = 200;
            res.write(`<!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="text">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>`);
            res.end();
        }
        if (req.method == "POST") {
            console.log("POST request...");
            let data = "";
            req.on("data", chunk => {
                data += chunk;
            });
            req.on("end", () => {
                // console.log(data);
                let stringObj = querystring.parse(data);
                let inputText = stringObj.text;
                let inputColor = stringObj.color;
                let query = chalk[inputColor](inputText);
                console.log(query);
                res.setHeader("content-type", "text/html");
                res.statusCode = 200;
                res.write(
                    `<!doctype html><html><title>${inputText}</title><a href="/" style="color:${inputColor}">${inputText}</a></html>`
                );
                res.statusCode = 200;
                res.end();
            });
        }
    })
    .listen(8080);
