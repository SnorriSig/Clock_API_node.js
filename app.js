const express = require("express");
const port = process.env.PORT || 8080
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString()

const main = fs.readFileSync("./public/main/index.html").toString()
const mainPage = nav.replace("%%DOCUMENT_TITLE%%", "World Clock") + main

const ny = fs.readFileSync("./public/cities/new_york.html").toString()
const nyPage = nav.replace("%%DOCUMENT_TITLE%%", "New York Time") + ny

const rvk = fs.readFileSync("./public/cities/reykjavik.html").toString()
const rvkPage = nav.replace("%%DOCUMENT_TITLE%%", "Reykjavik Time") + rvk

const cph = fs.readFileSync("./public/cities/copenhagen.html").toString()
const cphPage = nav.replace("%%DOCUMENT_TITLE%%", "Copenhagen Time") + cph

const mos = fs.readFileSync("./public/cities/moscow.html").toString()
const mosPage = nav.replace("%%DOCUMENT_TITLE%%", "Moscow Time") + mos

const tok = fs.readFileSync("./public/cities/tokyo.html").toString()
const tokPage = nav.replace("%%DOCUMENT_TITLE%%", "Tokyo Time") + tok

app.get("/", (req, res) =>{
    //res.sendFile(__dirname + "/public/main/index.html")
    res.send(mainPage)
});

app.get("/new_york", (req, res) => {
    //res.sendFile(__dirname + "/public/cities/new_york.html")
    res.send(nyPage)
});

app.get("/reykjavik", (req, res) => {
    //res.sendFile(__dirname + "/public/cities/reykjavik.html")
    res.send(rvkPage)
});

app.get("/copenhagen", (req, res) => {
    //res.sendFile(__dirname + "/public/cities/copenhagen.html");
    res.send(cphPage)
});

app.get("/moscow", (req, res) => {
    //res.sendFile(__dirname + "/public/cities/moscow.html");
    res.send(mosPage)
});

app.get("/tokyo", (req, res) => {
    //res.sendFile(__dirname + "/public/cities/tokyo.html");
    res.send(tokPage)
});

app.listen(port, () => {
    console.log("Server running on port", 8080);
});