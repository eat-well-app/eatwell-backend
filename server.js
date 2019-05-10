//== Dependencies ==//
const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.json({message: 'Server up!'})
})

server.get("/routes", (req, res)=> {
    res.json({})
})

module.exports = server