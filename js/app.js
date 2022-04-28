// Hamburger
let menu = document.getElementById("menu");
let hamburger = document.getElementById("hamburger");

if(hamburger){
    hamburger.addEventListener("click", () => {

        menu.classList.toggle("active");
        hamburger.classList.toggle("active");
    
    });
}

// Amount button
let amount = document.getElementById("amount");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");


plus.addEventListener("click", () => {
        amount.value = (parseInt(amount.value) + 1);
});

minus.addEventListener("click", () => {
    if(amount.value > 1) {
        amount.value = (parseInt(amount.value) - 1);
    }
});