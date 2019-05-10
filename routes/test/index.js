const route = require("express").Router();

route.get("/routes", (req, res)=> {
    res.json({message: 'Routes working!'})
})

module.exports = route