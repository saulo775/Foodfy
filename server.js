const express = require('express');
const nunjucks = require('nunjucks');

const data = require('./data');
const { indexOf } = require('./data');

const server = express();

server.use(express.static('public'))

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
})



server.get("/", function (req, res) {
    return res.redirect("home")
})

server.get("/home", function (req, res) {
    return res.render("home", {recipes:data})
})

server.get("/recipes", function (req, res) {
    return res.render("recipes", {recipes:data})
})

server.get("/about", function (req, res) {
    return res.render("about")
})

// server.get("/recipes/:index", function (req, res) {

//     const recipeIndex = req.params.index;
//     let recipes = data.findIndex((id, index, array)=> id.title === recipeIndex);


//     return res.render("index", {recipes:data[recipeIndex]});


// })
server.get("/recipes/:index", function (req, res) {

    const recipeIndex = req.params.index;
    let id = data.findIndex(function(id){
        if (id===recipeIndex){
            return true
        }

    })
    if(!id){
        return res.send("erro")
    }



    return res.render("index", {recipes:data[recipeIndex]});

})







server.listen(5000, function() {
    console.log("Server is running!!!");
});