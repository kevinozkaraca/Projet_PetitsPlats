// fonction qui permet d'afficher les tags
function affichageEtSuppressionDesTags(recipes) {
    const tagsContainer = document.querySelector("#motClefChoisi");
    const tags = document.querySelectorAll("li");
    const tagsValues = [...tags].map((tag) => tag.innerText);
    tags.forEach((tag) => {
        tag.addEventListener("click", (e) => {
            const tagAfiltrer = e.target.innerText;
            const classOfTag = e.target.classList[1];
            if (tagsValues.includes(tagAfiltrer)) {
                tagsContainer.innerHTML += `<span class="tag ${classOfTag}">${tagAfiltrer} <i class="fa-regular fa-circle-xmark"></i></span>`;
                const closeBtn = document.querySelectorAll(".tag");
                closeBtn.forEach((btn) => {
                    btn.addEventListener("click", () => {
                        btn.remove();
                    });
                });
            }
        }
        );
    });
}
export default affichageEtSuppressionDesTags;