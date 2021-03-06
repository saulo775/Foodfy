const express = require('express')
const routes = express.Router()
const site = require('./controllers/site')
const recipes = require('./controllers/recipes')


/*##### ROTAS SITE #####*/
routes.get("/", function (req, res) {
    return res.redirect("home")
})
routes.get("/home", site.home)
routes.get("/recipes", site.recipes)
routes.get("/about", site.about)
routes.get("/recipes/:index", site.index)


/*##### ROTAS SITE #####*/
routes.get("/admin/recipes", recipes.index);
routes.get("/admin/recipes/create", recipes.create);
routes.get("/admin/recipes/:id", recipes.show);
routes.get("/admin/recipes/:id/edit", recipes.edit);
routes.post("/admin/recipes", recipes.post);
routes.put("/admin/recipes", recipes.put);
routes.delete("/admin/recipes", recipes.delete);



module.exports = routes