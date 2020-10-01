//const indexOf = require("../../data");

const recipes = document.querySelectorAll(".recipe")

for (let recipe of recipes){

    recipe.addEventListener("click", function(){
        const recipeId = recipe.getAttribute("id")
        window.location.href = `http://localhost:5000/recipes/${recipeId}`
    })
}
