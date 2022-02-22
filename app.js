const express = require("express");
const port = process.env.PORT || 8080
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString()

const main = fs.readFileSync("./public/main/index.html").toString()
const mainPage = nav.replace("%%DOCUMENT_TITLE%%", "World Clock") + main

app.get("/", (req, res) =>{
    //res.sendFile(__dirname + "/public/main/index.html")
    res.send(mainPage)
});

app.get("/new_york", (req, res) => {
    res.sendFile(__dirname + "/public/cities/new_york.html")
});

app.get("/reykjavik", (req, res) => {
    res.sendFile(__dirname + "/public/cities/reykjavik.html")
});

app.get("/copenhagen", (req, res) => {
    res.sendFile(__dirname + "/public/cities/copenhagen.html");
});

app.get("/moscow", (req, res) => {
    res.sendFile(__dirname + "/public/cities/moscow.html");
});

app.get("/tokyo", (req, res) => {
    res.sendFile(__dirname + "/public/cities/tokyo.html");
});

app.listen(port, () => {
    console.log("Server running on port", 8080);
});