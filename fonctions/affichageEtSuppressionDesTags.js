// fonction qui permet d'afficher les tags
function affichageEtSuppressionDesTags() {
    const tagsContainer = document.querySelector("#motClefChoisi");
    const tags = document.querySelectorAll(".item");
    const tagsValues = [...tags].map((tag) => tag.dataset.value);
    tags.forEach((tag) => {
        //
        tag.addEventListener("click", (e) => {
            const tagAfiltrer = e.target.dataset.value;
            const classOfTag = e.target.classList[1];
            if (tagsValues.includes(tagAfiltrer)) {
                tagsContainer.innerHTML += `<span class="${classOfTag}">${tagAfiltrer}<span class="close">x</span></span>`;
                const closeBtn = document.querySelectorAll(".close");
                closeBtn.forEach((btn) => {
                    btn.addEventListener("click", (e) => {
                        e.target.parentElement.remove();
                    });
                });
            }
        }
        );
    });
}

export default affichageEtSuppressionDesTags;