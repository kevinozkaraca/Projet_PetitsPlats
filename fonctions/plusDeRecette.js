function plusDeRecette() {
    let recipes = document.querySelectorAll(".recette");
    if (recipes.length == 0) {
        let containerPourData = document.querySelector("#containerPourData");
        containerPourData.innerHTML = `<p> « Aucune recette ne correspond à votre critère… vous pouvez
        chercher « tarte aux pommes », « poisson », etc.</p>`;
    }
}
export default plusDeRecette;