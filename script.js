const itensMenu = document.querySelectorAll(".menu p");

const cards = document.querySelectorAll(".card");

itensMenu.forEach((item, index) => {
    item.addEventListener("click", () => {

        cards[index].scrollIntoView({
            behavior: "smooth"
        });

    });
});