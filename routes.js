const express = require('express')
const routes = express.Router()
const site = require('./controllers/site')
//const recipes = require('./controllers/recipes')


/*##### ROTAS SITE #####*/
routes.get("/", function (req, res) {
    return res.redirect("home")
})
routes.get("/home", site.home)
routes.get("/recipes", site.recipes)
routes.get("/about", site.about)
routes.get("/recipes/:index", site.index)


/*##### ROTAS SITE #####*/
/*routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita
routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita*/



module.exports = routes