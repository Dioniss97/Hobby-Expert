export let renderNotification = (message, status) => {

    let added = document.querySelector(".added");

    added.innerHTML = message;

    if (added) {

        added.classList.add(status);
        
        // if (status == "success") {
        //     added.classList.add("active");
        // } else if (status == "error") {
        //     added.classList.add("active-red");
        // }

        setTimeout(() => {

            added.classList.remove("success", "error");
        }, 5000);
    }
}