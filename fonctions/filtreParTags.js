import recipes from "../recipes.js";
import { affichageDesRecettes } from "../script.js";
// Description: Permet de filtrer les recettes par tags
function filtreParTags() {
    const motClefChoisi = document.querySelector("#motClefChoisi");
    let ensembleDesTags = [];
    let tag = document.querySelectorAll(".tag");
    let recettesFiltrees = [];
    if (tag) {
        for (let i = 0; i < tag.length; i++) {
            ensembleDesTags.push(tag[i].innerText);
            // filtre des recettes par l'ensemble des tags

        }
    }
    console.log(recettesFiltrees);
    console.log(ensembleDesTags);
}

export default filtreParTags;
