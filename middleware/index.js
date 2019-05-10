//== Dependencies ==//
const express = require("express")
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
//== Routes ==//
const test = require("../routes/test");

const configureMiddleware = server => {
    server.use(express);
    server.use(helmet());
    server.use(morgan("dev"));
    server.use(cors());
    server.use(require("body-parser").urlencoded({ extended: false }));
}

module.exports = configureMiddleware;