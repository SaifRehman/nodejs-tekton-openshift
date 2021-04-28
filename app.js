let express = require("express");
let app = express();
let port = 3000;

app.get("/", (req, res) => res.send("ADG"));

app.listen(port, () => console.log('Example app listening at http://localhost:3000'));
