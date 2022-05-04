import { renderNotification } from "./notification.js";

export let renderProduct = () => {

    let add = document.querySelector(".add-to-cart-button");
    //let amount = document.querySelector(".amount")

    if (add) {
    
        add.addEventListener("click", () => {

            renderNotification("Producto/s añadido con exito.", "success");

            // if (amount.value < 0) {
            //     renderNotification("Cagaste", "error");
            // }
            // else {
            //     renderNotification("Producto añadido con exito.", "success");
            // }
        });
    }
}