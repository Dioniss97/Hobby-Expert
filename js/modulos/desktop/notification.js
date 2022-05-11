export let renderNotification = () => {

    document.addEventListener("message", (event => {

        let notification = document.querySelector(".notification");
        let notificationText = document.querySelector(".notification-message")

        notificationText.innerHTML = event.detail.text;
        notification.classList.add(event.detail.type);

        // if (status == "success") {
        //     added.classList.add("active");
        // } else if (status == "error") {
        //     added.classList.add("active-red");
        // }

        setTimeout(() => {

            notification.classList.remove(event.detail.type);
        }, 5000);
    }));
}