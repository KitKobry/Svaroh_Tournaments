document.querySelectorAll(".ranking-row").forEach(row => {

    row.addEventListener("click", () => {

        const player =
        row.parentElement;

        player.classList.toggle("active");

    });

});

document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        const details =
        button.closest(".ranking-expanded")
              .querySelector(".ranking-details");

        details.classList.toggle("active");

    });

});