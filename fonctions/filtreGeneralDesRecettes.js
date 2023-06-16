// Description: Filtre les recettes par mot clé, ingrédient, appareil ou ustensile
import { affichageDesRecettes } from "../script.js";
import plusDeRecette from "./plusDeRecette.js";
function filtreGeneralDesRecettes(recipes) {
    const rechercheInput = document.querySelector("#rechercheParMotClef");
    // Filtrer les recettes par mot clé
    rechercheInput.addEventListener("input", (e) => {
        const valeur = e.target.value.toLowerCase();
        if (valeur.length >= 3) {
            // filtre les recettes par nom, ingredients, appareils ou ustensiles :
            const recettesFiltrees = recipes.filter((recipe) => {
                const ingredients = recipe.ingredients.map((ingredient) => ingredient.ingredient.toLowerCase());
                const appareils = recipe.appliance.toLowerCase();
                const ustensiles = recipe.ustensils.map((ustensil) => ustensil.toLowerCase());
                return (
                    recipe.name.toLowerCase().includes(valeur) ||
                    ingredients.some((ingredient) => ingredient.includes(valeur)) ||
                    appareils.includes(valeur) ||
                    ustensiles.some((ustensil) => ustensil.includes(valeur))
                );
            });
            affichageDesRecettes(recettesFiltrees);
            if (recettesFiltrees.length == 0) {
                plusDeRecette();
            }
        } else if (valeur.length <= 3) {
            affichageDesRecettes(recipes);
        }
    });


}
export default filtreGeneralDesRecettes;