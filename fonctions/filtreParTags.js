import recipes from "../recipes.js";
import { affichageDesRecettes } from "../script.js";
// Description: Permet de filtrer les recettes par tags
function filtreParTags() {
    // récupération des tags
    let tags = document.querySelectorAll(".tag");
    // si il y a des tags
    if (tags.length <= 1) {
        // si deux tags sont identiques, on supprime le deuxième
        for (let i = 0; i < tags.length; i++) {
            // filtrer en fonction de la class du tags
            if (tags[i].classList[1] == "ingredients-result") {
                const valeur = [];
                valeur.push(tags[i].innerText.toLowerCase());
                // filtre les recettes par ingredients
                const recettesFiltrees = recipes.filter((recipe) => {
                    const ingredients = recipe.ingredients.map((ingredient) => ingredient.ingredient.toLowerCase());
                    return (
                        ingredients.some((ingredient) => ingredient.includes(valeur))
                    );
                });
                affichageDesRecettes(recettesFiltrees);
            }
            if (tags[i].classList[1] == "appareils-result") {
                const valeur = [];
                valeur.push(tags[i].innerText.toLowerCase());
                // filtre les recettes par appareils
                const recettesFiltrees = recipes.filter((recipe) => {
                    const appareils = recipe.appliance.toLowerCase();
                    return (
                        appareils.includes(valeur)
                    );
                });
                affichageDesRecettes(recettesFiltrees);
            }
            if (tags[i].classList[1] == "ustensils-result") {
                const valeur = [];
                valeur.push(tags[i].innerText.toLowerCase());
                // filtre les recettes par ustensiles
                const recettesFiltrees = recipes.filter((recipe) => {
                    const ustensiles = recipe.ustensils.map((ustensil) => ustensil.toLowerCase());
                    return (
                        ustensiles.some((ustensil) => ustensil.includes(valeur))
                    );
                });
                affichageDesRecettes(recettesFiltrees);
            }
        }
        if (tags.length == 0) {
            affichageDesRecettes(recipes);
        }
    }
}

export default filtreParTags;
