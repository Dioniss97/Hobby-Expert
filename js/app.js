// Hamburger
let menu = document.getElementById("menu");
let hamburger = document.getElementById("hamburger");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
}

// Amount button
let amount = document.getElementById("amount");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

if (amount) {
    plus.addEventListener("click", () => {
        amount.value = (parseInt(amount.value) + 1);
    });

    minus.addEventListener("click", () => {
        if (amount.value > 1) {
            amount.value = (parseInt(amount.value) - 1);
        }
    });
}

// Tabs
let tabs = document.querySelectorAll("[data-target]");
let contents = document.querySelectorAll("[data-content]");

if (tabs) {

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {
            let target = document.querySelector(tab.dataset.target);

            contents.forEach(content => {
                content.classList.remove("active");
            });
            target.classList.add("active");

            tabs.forEach(tab => {
                tab.classList.remove("active");
            });
            tab.classList.add("active");
        });
    });
}