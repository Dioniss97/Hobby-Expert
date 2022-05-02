export let renderTabs2 = () => {
    
    let tabs = document.querySelectorAll(".tab");
    let contents = document.querySelectorAll(".content");

    if (tabs) {
        
        tabs.forEach(tab => {

            tab.addEventListener("click", () => {

                tabs.forEach(tab => {
                    contents.classList.remove("active");
                    tab.classList.remove("active");
                });
                if (tabs.dataset.target == contents.dataset.value) {
                    tab.classList.add("active");
                    contents.classList.add("active");
                }
            });
        });
    }
}