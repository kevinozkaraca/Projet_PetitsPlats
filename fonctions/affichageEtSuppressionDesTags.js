import filtreParTags from "./filtreParTags.js";
// fonction qui permet d'afficher les tags
function affichageEtSuppressionDesTags() {
    const tagsContainer = document.querySelector("#motClefChoisi");
    const tags = document.querySelectorAll("li");
    const tagsValues = [...tags].map((tag) => tag.innerText);
    tags.forEach((tag) => {
        tag.addEventListener("click", (e) => {
            const tagAfiltrer = e.target.innerText;
            const classOfTag = e.target.classList[1];
            // si deux tags sont identiques, on ne l'affiche pas
            if (tagsValues.includes(tagAfiltrer)) {
                tagsContainer.innerHTML += `<span class="tag ${classOfTag}">${tagAfiltrer} <i class="fa-regular fa-circle-xmark"></i></span>`;
                filtreParTags();
            }
            const closeBtn = document.querySelectorAll(".tag");
            closeBtn.forEach((btn) => {
                btn.addEventListener("click", () => {
                    btn.remove();
                    filtreParTags();
                });
            });
        }
        );
    });
}
export default affichageEtSuppressionDesTags;