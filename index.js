const express = require("express");
const { configureMiddleware } = require("./middleware");

const server = express();

configureMiddleware(server);

server.get("/", (req, res) => {
    res.json({message: 'Server up!'})
})

module.exports = server