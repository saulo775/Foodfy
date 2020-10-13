const fs = require('fs')
const data = require('../data.json')



exports.index = function(req, res){
    return res.render("admin/index", {recipes:data.recipes})
}

exports.show = function(req, res){

    const{ id } = req.params
    const foundRecipe = data.recipes.find(function(recipes) {
        return recipes.id == id
    })

    if (!foundRecipe) return res.send("Recipe not found!!!")

    const recipes = {
        ...foundRecipe
    }
    return res.render("admin/show", {recipes})
}

exports.create = function(req, res){

    /*const keys = Object.keys(req.body)

    for ( key of keys){
        if (req.body[key] == "")
            return res.send("Please fill all fields!!!")
    }
    let {img_url, ingredients, prepare, infos} = req.body

    const id = Number(data.recipes.length + 1)


    data.recipes.push({
        id,
        img_url,
        ingredients,
        prepare,
        infos,
        class_type,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
        if(err){
            return res.send("Write file error!!!")
        }
    })*/
    return res.render("admin/create")

}


exports.edit = function(req, res){
    const{ id } = req.params
    const foundRecipe = data.recipes.find(function(recipes) {
        return recipes.id == id
    })

    if (!foundRecipe) return res.send("Recipe not found!!!")

    return res.render("admin/edit", {recipes:foundRecipe})
}


exports.post = function(req, res){
    return res.redirect("admin/index")
}

exports.put = function(req, res){
    return res.redirect("admin/index")
}

exports.delete = function(req, res){
    return res.redirect("admin/index")
}