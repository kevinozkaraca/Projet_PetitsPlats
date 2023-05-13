// Description: Filtre les recettes par mot clé, ingrédient, appareil ou ustensile
import { affichageDesRecettes } from "../script.js";
function filtreGeneralDesRecettes(recipes) {
    const rechercheInput = document.querySelector("#rechercheParMotClef");
    const rechercheIngredient = document.querySelector("#ingredients");
    const rechercheAppareil = document.querySelector("#appareils");
    const rechercheUstensile = document.querySelector("#ustensiles");
    const listeDesAppareils = document.querySelector("#listeDesAppareils");
    const listeDesIngredients = document.querySelector("#listeDesIngredients");
    const listeDesUstensils = document.querySelector("#listeDesUstensils");
    // Filtrer les recettes par mot clé
    rechercheInput.addEventListener("input", (e) => {
        const valeur = e.target.value.toLowerCase();
        // filtre les recettes par nom, ingredients, appareils ou ustensiles
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
    }
    );
}
export default filtreGeneralDesRecettes;