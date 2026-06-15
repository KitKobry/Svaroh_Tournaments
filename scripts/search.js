const searchData = [

    {
        name: "Scorpion",
        url: "/Svaroh_Tournaments/players/scorpion.html",
        type: "Гравець"
    },

    {
        name: "Appa",
        url: "/Svaroh_Tournaments/players/appa.html",
        type: "Гравець"
    },

    {
        name: "Biber",
        url: "/Svaroh_Tournaments/players/biber.html",
        type: "Гравець"
    },

    {
        name: "Consigliere",
        url: "/Svaroh_Tournaments/players/consigliere.html",
        type: "Гравець"
    },

    {
        name: "Chornobyl",
        url: "teams/chornobyl.html",
        type: "Команда"
    },

    {
        name: "Абсолют 2026",
        url: "tournaments/absolut-2026.html",
        type: "Турнір"
    }

];

const searchInput =
document.getElementById("searchInput");

const searchResults =
document.getElementById("searchResults");

searchInput.addEventListener("input", () => {

    const query =
    searchInput.value.toLowerCase();

    searchResults.innerHTML = "";

    if(query.length === 0){

        searchResults.style.display = "none";

        return;
    }

    const results = searchData.filter(item =>

        item.name.toLowerCase().includes(query)

    );

    results.slice(0, 5).forEach(item => {

        const result =
        document.createElement("a");

        result.href = item.url;

        result.textContent =
        `${item.name} (${item.type})`;

        result.classList.add("search-result");

        searchResults.appendChild(result);

    });

    searchResults.style.display =
        results.length > 0 ? "block" : "none";

});

document.addEventListener("click", (e) => {

    if(!e.target.closest(".search-container")){

        searchResults.style.display = "none";

    }

});