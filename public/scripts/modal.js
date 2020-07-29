const modalOverlay = document.querySelector('.modal_overlay');
const recipes = document.querySelectorAll('.recipe');

const closeModal = modalOverlay.querySelector('.close_modal');

for (let recipe of recipes) {
    recipe.addEventListener("click", function () {

        let image = recipe.querySelector("img").src;
        let title = recipe.querySelector("h3").innerHTML;
        let author = recipe.querySelector("h4").innerHTML;

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = `${image}`;
        modalOverlay.querySelector('h3').textContent = `${title}`;
        modalOverlay.querySelector('h4').textContent = `${author}`;

    });
}

modalOverlay.querySelector('.close_modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active');
})
