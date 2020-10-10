const data = require('../data')


exports.home = function (req, res) {
    return res.render("site/home", {recipes:data})
}

exports.recipes = function (req, res) {
    return res.render("site/recipes", {recipes:data})
}

exports.about = function (req, res) {
    return res.render("site/about")
}

exports.index = function (req, res) {

    const recipeIndex = req.params.index;
    let id = data.findIndex(function(id){
        if (id===recipeIndex){
            return true
        }

    })
    if(!id){
        return res.send("erro")
    }



    return res.render("site/index", {recipes:data[recipeIndex]});

}