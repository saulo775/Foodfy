//const indexOf = require("../../data");

const recipes = document.querySelectorAll(".recipe")
const button_hide = document.querySelectorAll(".button_hide")
const content = document.querySelectorAll(".content")



for (let recipe of recipes){

    recipe.addEventListener("click", function(){
        const recipeId = recipe.getAttribute("id")
        window.location.href = `http://localhost:5000/recipes/${recipeId}`
    })
}


for (const button in button_hide) {
    button_hide[button].addEventListener("click", function() {
        if(content[button].classList.contains('hidden')) {
            content[button].classList.remove('hidden')
            button_hide[button].textContent = 'ESCONDER'
        } else {
            content[button].classList.add('hidden')

            button_hide[button].textContent = 'MOSTRAR'
        }
    })
}