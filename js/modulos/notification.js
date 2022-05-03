export let renderNotification = () => {

    let add = document.querySelector(".ad-to-cart-button");
    let added = document.querySelector(".added");

    if (add) {

        add.addEventListener("click", () => {
            
            added.classList.remove("active");
            added.classList.add("active");
        });
    }
}