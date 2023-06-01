// Description: Filtre les recettes par mot clé, ingrédient, appareil ou ustensile
import { affichageDesRecettes } from "../script.js";
import plusDeRecette from "./plusDeRecette.js";
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
        if (valeur.length >= 3) {
            // filtre les recettes par nom, ingredients, appareils ou ustensiles :
            const recettesFiltrees = [];
            for (let i = 0; i < recipes.length; i++) {
                const recipe = recipes[i];
                const ingredients = [];
                for (let j = 0; j < recipe.ingredients.length; j++) {
                    const ingredient = recipe.ingredients[j].ingredient.toLowerCase();
                    ingredients.push(ingredient);
                }
                const appareils = recipe.appliance.toLowerCase();
                const ustensiles = [];
                for (let k = 0; k < recipe.ustensils.length; k++) {
                    const ustensil = recipe.ustensils[k].toLowerCase();
                    ustensiles.push(ustensil);
                }

                if (
                    recipe.name.toLowerCase().includes(valeur) ||
                    ingredients.some((ingredient) => ingredient.includes(valeur)) ||
                    appareils.includes(valeur) ||
                    ustensiles.some((ustensil) => ustensil.includes(valeur))
                ) {
                    recettesFiltrees.push(recipe);
                }
            }
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