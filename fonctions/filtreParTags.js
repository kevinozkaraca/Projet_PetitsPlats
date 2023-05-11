import recipes from "../recipes.js";
import { affichageDesRecettes } from "../script.js";
// Description: Permet de filtrer les recettes par tags
function filtreParTags() {
    // récupération des tags
    const motClefChoisi = document.querySelector("#motClefChoisi");
    let ensembleDesTags = [];
    let tag = document.querySelectorAll(".tag");
    let recettesFiltrees;
    let tags = [];
    // récupération des tags
    if (motClefChoisi.value) {
        tags.push(motClefChoisi.value);
        // filtre des recettes par tags
        recettesFiltrees = recipes.filter((recette) => {
            return tags.every((tag) => {
                return recette.tags.includes(tag);
            });
        }
        );
    }

    console.log(recettesFiltrees);
    console.log(ensembleDesTags);
}

export default filtreParTags;
