const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const open = document.getElementById('open');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

const $map = document.querySelector('div.img_map');
const $call = document.querySelector('div.img_call');

$map.addEventListener('click', e => {
    window.scrollTo({
        top: 600,
        behavior: 'smooth',
    });
});

$call.addEventListener('click', e => {
    window.scrollTo({ 
        top: 600,
        behavior: 'smooth',
    });
});

// ---------------

const dropdownButton = document.getElementById("dropdownButton");
const optionsMenu = document.getElementById("optionsMenu");
const dropdownItems = document.querySelectorAll(".menu-item");

dropdownButton.addEventListener("click", () => {
    if (optionsMenu.style.display == "block") {
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