//== Dependencies ==//
const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const cors = require("cors");

const server = express();

const port = process.env.PORT || 3300;

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.json({message: 'Server up!'})
})

module.exports = server