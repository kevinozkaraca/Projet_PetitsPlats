import recipes from "../recipes.js";
import { affichageDesRecettes } from "../script.js";
// Description: Permet de filtrer les recettes par tags
function filtreParTags() {
    const motClefChoisi = document.querySelector("#motClefChoisi");
    let ensembleDesTags = [];
    let tag = document.querySelectorAll(".tag");
    if (tag.length > 0) {
        let ensembleDesTags = [...tag].map((tag) => tag.innerText);
        // filtrer les recettes par tags
        let recettesFiltrees = recipes.filter((recipe) => {
            let ingredients = recipe.ingredients.map((ingredient) => ingredient.ingredient);
            let ustensils = recipe.ustensils;
            let appliance = recipe.appliance;
            let tags = [...ingredients, ...ustensils, appliance];
            return ensembleDesTags.every((tag) => tags.includes(tag));
        }

        );
        affichageDesRecettes(recettesFiltrees);
    } else {
        affichageDesRecettes(recipes);
    }
}
export default filtreParTags;