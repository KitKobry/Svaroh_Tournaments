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
        name: "Exter1or",
        url: "/Svaroh_Tournaments/players/exter1or.html",
        type: "Гравець"
    },

    {
        name: "Justvit9",
        url: "/Svaroh_Tournaments/players/justvit9.html",
        type: "Гравець"
    },

    {
        name: "Kiriya",
        url: "/Svaroh_Tournaments/players/kiriya.html",
        type: "Гравець"
    },

    {
        name: "KitKobry",
        url: "/Svaroh_Tournaments/players/kitkobry.html",
        type: "Гравець"
    },

    {
        name: "Krippi",
        url: "/Svaroh_Tournaments/players/krippi.html",
        type: "Гравець"
    },

    {
        name: "Mashiro",
        url: "/Svaroh_Tournaments/players/mashiro.html",
        type: "Гравець"
    },

    {
        name: "Lilgangtimur",
        url: "/Svaroh_Tournaments/players/timur.html",
        type: "Гравець"
    },

    {
        name: "Vuiko",
        url: "/Svaroh_Tournaments/players/vuiko.html",
        type: "Гравець"
    },

    {
        name: "Chornobyl",
        url: "/Svaroh_Tournaments/teams/chornobyl.html",
        type: "Команда"
    },

    {
        name: "4308",
        url: "/Svaroh_Tournaments/teams/4308.html",
        type: "Команда"
    },

    {
        name: "Blitz",
        url: "/Svaroh_Tournaments/teams/blitz.html",
        type: "Команда"
    },

    {
        name: "Діти Сонця",
        url: "/Svaroh_Tournaments/teams/cos.html",
        type: "Команда"
    },

    {
        name: "EGOR34SF",
        url: "/Svaroh_Tournaments/teams/egor34sf.html",
        type: "Команда"
    },

    {
        name: "Конотопська Волина",
        url: "/Svaroh_Tournaments/teams/konotop.html",
        type: "Команда"
    },

    {
        name: "LGTV",
        url: "/Svaroh_Tournaments/teams/lgtv.html",
        type: "Команда"
    },

    {
        name: "Бесарабська Мамалига",
        url: "/Svaroh_Tournaments/teams/mamalyha.html",
        type: "Команда"
    },

    {
        name: "NAVI",
        url: "/Svaroh_Tournaments/teams/navi.html",
        type: "Команда"
    },

    {
        name: "Stoned Cucumbers",
        url: "/Svaroh_Tournaments/teams/stoned-cucumbers.html",
        type: "Команда"
    },

    {
        name: "Білі Нігри",
        url: "/Svaroh_Tournaments/teams/white.html",
        type: "Команда"
    },

    {
        name: "Жємнякі",
        url: "/Svaroh_Tournaments/teams/ziemniaki.html",
        type: "Команда"
    },

    {
        name: "Абсолют 2026",
        url: "/Svaroh_Tournaments/tournaments/absolute2026.html",
        type: "Турнір"
    },

    {
        name: "Мінор 2025 Миша на цвях",
        url: "/Svaroh_Tournaments/tournaments/minor2025_mnc.html",
        type: "Турнір"
    },

    {
        name: "Мінор 2025",
        url: "/Svaroh_Tournaments/tournaments/minor2025.html",
        type: "Турнір"
    },
    {
        name: "Мінор 2023",
        url: "/Svaroh_Tournaments/tournaments/minor2023.html",
        type: "Турнір"
    },

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

    const results = searchData
    .filter(item =>
        item.name.toLowerCase().includes(query)
    )
    .sort((a, b) => {

        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        if (aName === query) return -1;
        if (bName === query) return 1;

        if (aName.startsWith(query) && !bName.startsWith(query))
            return -1;

        if (!aName.startsWith(query) && bName.startsWith(query))
            return 1;

        return aName.localeCompare(bName);
    });

    if (results.length === 0) {

    searchResults.innerHTML = `
        <div class="search-empty">
            Нічого не знайдено
        </div>
    `;

    searchResults.style.display = "block";

    return;
}

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