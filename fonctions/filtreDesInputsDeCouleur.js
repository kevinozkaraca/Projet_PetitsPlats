// Description: Permet de filtrer les listes de chaque input
function filtreDesInputsDeCouleur() {
    const input = document.querySelectorAll(".selectionDeTag");
    const list = document.querySelectorAll(".bloquesDeListe");
    const appareilsChevron = document.getElementsByClassName("bouttonDeRecherche")[1];
    const ustensilsChevron = document.getElementsByClassName("bouttonDeRecherche")[2];
    const ingredientsChevron = document.getElementsByClassName("bouttonDeRecherche")[0];
    input[0].addEventListener("keyup", (e) => {
        const value = e.target.value.toLowerCase();
        if (value.length == 1) {
            ingredientsChevron.click();
        }
        list[0].querySelectorAll("li").forEach((li) => {
            if (li.innerText.toLowerCase().includes(value)) {
                li.style.display = "block";
            } else {
                li.style.display = "none";
            }
        });
    }
    );
    input[1].addEventListener("keyup", (e) => {
        const value = e.target.value.toLowerCase();
        if (value.length == 1) {
            appareilsChevron.click();
        }
        list[1].querySelectorAll("li").forEach((li) => {
            if (li.innerText.toLowerCase().includes(value)) {
                li.style.display = "block";
            } else {
                li.style.display = "none";
            }
        });
    }
    );

    input[2].addEventListener("keyup", (e) => {
        const value = e.target.value.toLowerCase();
        if (value.length == 1) {
            ustensilsChevron.click();
        }
        list[2].querySelectorAll("li").forEach((li) => {
            if (li.innerText.toLowerCase().includes(value)) {
                li.style.display = "block";
            } else {
                li.style.display = "none";
            }
        });
    }
    );
}
export default filtreDesInputsDeCouleur;