import recipes from "./recipes.js";
const recipesSection = document.querySelector("#containerPourData");
const appareilsChevron = document.getElementsByClassName("bouttonDeRecherche")[1];
const ustensilsChevron = document.getElementsByClassName("bouttonDeRecherche")[2];
const ingredientsChevron = document.getElementsByClassName("bouttonDeRecherche")[0];
const appareilsInput = document.getElementById("appareils");
const ustensilsInput = document.getElementById("ustensiles");
const ingredientsInput = document.getElementById("ingredients");
const ensembleBouttonsRecherche = document.querySelectorAll(".ensembleBouttonsRecherche");
const selectionDeTag = document.querySelectorAll(".selectionDeTag");
const listeDesIngredients = document.getElementById("listeDesIngredients");
const listeDesAppareils = document.getElementById("listeDesAppareils");
const listeDesUstensils = document.getElementById("listeDesUstensiles");

// fonction qui permet de créer le DOM de chaque recette
function recipesFactory(data) {
    // destructuring de l'objet data
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;

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
                    <p class="description">${description.substring(0, 175)}${description.length > 175 ? "..." : ""}</p>
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

function openList(ensembleBouttonsRecherche) {
    ensembleBouttonsRecherche.classList.add("Active");
}

function closeList(ensembleBouttonsRecherche) {
    ensembleBouttonsRecherche.classList.remove("Active");
}

// fonction qui permet de d'utiliser les chevrons
function toggleList(e, index, input, placeholder, chevron, placeholders) {
    const activeClass = "Active";
    const otherIndexes = [0, 1, 2].filter((i) => i !== index);
    const otherensembleBouttonsRecherche = otherIndexes.map((i) => ensembleBouttonsRecherche[i]);

    if (ensembleBouttonsRecherche[index].classList.contains(activeClass)) {
        closeList(ensembleBouttonsRecherche[index]);
        input.placeholder = placeholder;
        chevron.classList.remove(activeClass);
    } else {
        openList(ensembleBouttonsRecherche[index]);
        input.placeholder = `Rechercher un ${placeholder.toLowerCase()}`;
        chevron.classList.add(activeClass);
        otherensembleBouttonsRecherche.forEach((css) => closeList(css));
        placeholders.forEach(([input, placeholder, chevron], i) => {
            input.placeholder = i === index ? placeholder : input.placeholder;
            chevron.classList.toggle(activeClass, i === index);
        });
    }
}

ingredientsChevron.addEventListener("click", (e) => {
    toggleList(e, 0, ingredientsInput, "Ingrédients", ingredientsChevron, [
        [appareilsInput, "Appareil", appareilsChevron],
        [ustensilsInput, "Ustensile", ustensilsChevron],
    ]);
    selectionDeTag[1].placeholder = "Appareil";
    selectionDeTag[2].placeholder = "Ustensile";
    appareilsChevron.style.transform = "rotate(0deg)";
    ustensilsChevron.style.transform = "rotate(0deg)";
    ingredientsChevron.style.transform = "rotate(180deg)";
});

appareilsChevron.addEventListener("click", (e) => {
    toggleList(e, 1, appareilsInput, "Appareils", appareilsChevron, [
        [ingredientsInput, "Ingrédient", ingredientsChevron],
        [ustensilsInput, "Ustensile", ustensilsChevron],
    ]);
    selectionDeTag[0].placeholder = "Ingrédient";
    selectionDeTag[2].placeholder = "Ustensile";
    appareilsChevron.style.transform = "rotate(180deg)";
    ustensilsChevron.style.transform = "rotate(0deg)";
    ingredientsChevron.style.transform = "rotate(0deg)";
});

ustensilsChevron.addEventListener("click", (e) => {
    toggleList(e, 2, ustensilsInput, "Ustensiles", ustensilsChevron, [
        [ingredientsInput, "Ingrédient", ingredientsChevron],
        [appareilsInput, "Appareil", appareilsChevron],
    ]);
    selectionDeTag[0].placeholder = "Ingrédient";
    selectionDeTag[1].placeholder = "Appareil";
    appareilsChevron.style.transform = "rotate(0deg)";
    ustensilsChevron.style.transform = "rotate(180deg)";
    ingredientsChevron.style.transform = "rotate(0deg)";
});

function affichageDesIngredients(recipes) {
    const ingredients = recipes.flatMap((recipe) =>
        recipe.ingredients.map((ingredient) => ingredient.ingredient.toLowerCase())
    );
    const uniqueIngredients = [...new Set(ingredients)].sort();

    listeDesIngredients.innerHTML = uniqueIngredients
        .map((ingredient) => {
            return `<li class="item ingredients-result" data-value='${ingredient}'>${ingredient}</li>`;
        })
        .join("");
}
function affichageDesAppareils(recipes) {
    const appareils = [...new Set(recipes.map((recipe) => recipe.appliance.toLowerCase()))].sort();
    listeDesAppareils.innerHTML = appareils
        .map((appareil) => {
            return `<li class="item appareils-result" data-value="${appareil}" >${appareil}</li>`;
        })
        .join("");
}
function affichageDesUstensiles(recipes) {
    const ustensils = recipes.reduce((acc, recipe) => {
        return [...acc, ...recipe.ustensils];
    }, []);
    const uniqueUstensils = [...new Set(ustensils.map((ustensil) => ustensil.toLowerCase()))].sort();
    listeDesUstensils.innerHTML = uniqueUstensils
        .map((ustensil) => {
            return `<li class="item ustensils-result" data-value="${ustensil}" >${ustensil}</li>`;
        })
        .join("");
}

// fonction de base de l'application
async function init() {
    affichageDesRecettes(recipes);
    affichageDesAppareils(recipes);
    affichageDesUstensiles(recipes);
    affichageDesIngredients(recipes);
}
init();
