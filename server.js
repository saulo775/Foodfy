const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes')

// const data = require('./data');
// const { indexOf } = require('./data');

const server = express();

server.use(express.static('public'))
server.use(routes)


server.set("view engine", "njk");


nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
})


server.listen(5000, function() {
    console.log("Server is running!!!");
});