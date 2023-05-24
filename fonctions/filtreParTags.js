import recipes from "../recipes.js";
import { affichageDesRecettes } from "../script.js";
// Description: Permet de filtrer les recettes par tags
function filtreParTags() {
    // récupération des tags
    let tags = document.querySelectorAll(".tag");
    let recettesFiltrees = recipes; // initialise avec toutes les recettes
    // s'il y a des tags
    if (tags.length >= 1) {
        tags.forEach((tag) => {
            // récupération du tag à filtrer
            let tagAfiltrer = tag.innerText.trim().toLowerCase();
            let rechercheParMotClef = document.querySelector("#rechercheParMotClef");
            rechercheParMotClef.value = "";
            // filtre les recettes par nom, ingrédients, appareils ou ustensiles
            recettesFiltrees = recettesFiltrees.filter((recipe) => {
                const ingredients = recipe.ingredients.map((ingredient) =>
                    ingredient.ingredient.toLowerCase()
                );
                const appareils = recipe.appliance.toLowerCase();
                const ustensiles = recipe.ustensils.map((ustensil) =>
                    ustensil.toLowerCase()
                );

                return (
                    recipe.name.toLowerCase().includes(tagAfiltrer) ||
                    ingredients.some((ingredient) => ingredient.includes(tagAfiltrer)) ||
                    appareils.includes(tagAfiltrer) ||
                    ustensiles.some((ustensil) => ustensil.includes(tagAfiltrer))
                );
            });
        });

        affichageDesRecettes(recettesFiltrees);
    }
    // s'il n'y a pas de tags
    if (tags.length === 0 || tags.length === undefined) {
        window.location.reload();
    }
}
export default filtreParTags;
