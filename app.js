const path = require('path')
const express = require("express");
const port = process.env.PORT || 8080
const { log } = require('console');
const app = express();

const publicDirectoryPath = path.join(__dirname,"/public")
app.use(express.static(publicDirectoryPath))

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html")
});

app.get("/new_york", (req, res) => {
    res.sendFile(__dirname + "/public/new_york.html")
});

app.get("/reykjavik", (req, res) => {
    res.sendFile(__dirname + "/public/reykjavik.html")
});

app.get("/copenhagen", (req, res) => {
    res.sendFile(__dirname + "/public/copenhagen.html");
});

app.get("/moscow", (req, res) => {
    res.sendFile(__dirname + "/public/moscow.html");
});

app.get("/tokyo", (req, res) => {
    res.sendFile(__dirname + "/public/tokyo.html");
});

app.listen(port, () => {
    console.log("Server running on port", 8080);
});