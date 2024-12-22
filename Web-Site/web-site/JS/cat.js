const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const open = document.getElementById('open');
const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const open4 = document.getElementById('open4');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});
open1.addEventListener('click', () => {
    modal_container.classList.add('show');
});
open2.addEventListener('click', () => {
    modal_container.classList.add('show');
});
open3.addEventListener('click', () => {
    modal_container.classList.add('show');
});
open4.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

const dropdownButton = document.getElementById("dropdownButton");
const optionsMenu = document.getElementById("optionsMenu");
const dropdownItems = document.querySelectorAll(".menu-item");

dropdownButton.addEventListener("click", () => {
    if (optionsMenu.style.display === "block") {
        optionsMenu.style.display = "none";
    } else {
        optionsMenu.style.display = "block";
    }
});

dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
        optionsMenu.style.display = "none";
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
        optionsMenu.style.display = "none";
    }
});