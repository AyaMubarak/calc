const button = document.querySelector(".show");
const nav = document.querySelector(".sidebar");
const load = document.querySelector(".load");

button.onclick = () => {
    nav.classList.toggle("sidebar-open");
    load.classList.toggle("loader");
};

const svg = document.querySelector("svg");

svg.onclick = () => {
    if (nav.classList.contains("sidebar-open") && load.classList.contains("loader")) {
        nav.classList.remove("sidebar-open");
        load.classList.remove("loader");
    }
};





