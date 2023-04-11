import recipes from "./recipes.js";
const recipesSection = document.querySelector("#containerPourData");

// fonction qui permet de créer le DOM de chaque recette
function recipesFactory(data) {
    // destructuring de l'objet data
    const {
        id,
        name,
        servings,
        ingredients,
        time,
        description,
        appliance,
        ustensils,
    } = data;

    // fonction qui permet de créer le DOM de chaque recette
    const getRecipesDOM = () => {
        const article = document.createElement("article");
        article.setAttribute("role", "article");
        article.setAttribute("aria-label", "recette");
        article.classList.add("recipes");
        article.id = id;
        article.dataset.appliance = appliance;
        article.dataset.ustensils = ustensils;
        article.dataset.servings = servings;
        article.tabIndex = 0;

        if (article) {
            article.innerHTML = `
            <div class="imageDeRecipe"></div>
            <div class="informationRecipe">
                <div class="textDeRecipe">
                    <h2>${name}</h2>
                    <span class="tempsDePreparation"><i class="far fa-clock"></i> ${time} min</span>
                </div>
                <div class="informationSupplementaire">
                    <ul class="ingredientsDeRecipe">
                        ${ingredients
                    .map(
                        (ingredient) =>
                            `<li id="listeDesIngredientsLI">${ingredient.ingredient}: ${ingredient.quantity ? ingredient.quantity : ""
                            } ${ingredient.unit ? ingredient.unit : ""}</li>`
                    )
                    .join("")}
                    
                    </ul>
                    <p class="description">${description.substring(
                        0,
                        175
                    )}${description.length > 175 ? "..." : ""}</p>
                </div>
            </div>
        `;
        } else {
            throw new Error("Il n'y a pas d'élément");
        }
        const listeDesIngredientsLI = article.querySelectorAll("#listeDesIngredientsLI");
        if (listeDesIngredientsLI.length > 4) {
            for (let i = 6; i < listeDesIngredientsLI.length; i++) {
                listeDesIngredientsLI[5].innerHTML = "...";
                listeDesIngredientsLI[i].innerHTML = "";
            }
        }
        return article;
    };

    return {
        id,
        name,
        servings,
        ingredients,
        time,
        description,
        appliance,
        ustensils,
        getRecipesDOM,
    };
}
// fonction qui permet d'afficher les recettes
function affichageDesRecettes(recipes) {
    containerPourData.innerHTML = "";
    for (let i = 0; i < recipes.length; i++) {
        const item = recipes[i];
        const recipeTemplate = recipesFactory(item);
        const recipeDom = recipeTemplate.getRecipesDOM();
        containerPourData.appendChild(recipeDom);
    }
}
// fonction de base de l'application
async function init() {
    affichageDesRecettes(recipes)

}
init();