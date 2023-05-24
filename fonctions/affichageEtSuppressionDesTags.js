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
            const innerTextArray = Array.from(closeBtn).map(element => element.innerText.trim());
            // Vérification des innerText
            if (innerTextArray.length > 1) {
                let hasDuplicateInnerText = false;

                for (let i = 0; i < innerTextArray.length - 1; i++) {
                    for (let j = i + 1; j < innerTextArray.length; j++) {
                        if (innerTextArray[i] === innerTextArray[j]) {
                            hasDuplicateInnerText = true;
                            break;
                        }
                    }
                    if (hasDuplicateInnerText) {
                        break;
                    }
                }

                if (hasDuplicateInnerText) {
                    // Supprimer un des éléments en double ici
                    closeBtn[closeBtn.length - 1].remove();
                }
            }
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