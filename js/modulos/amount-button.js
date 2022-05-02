export let renderAmount = () => {
    let amount = document.querySelectorAll(".amount");
    let plus = document.querySelectorAll(".plus");
    let minus = document.querySelectorAll(".minus");

    if (amount) {

        plus.forEach(element => {

            plus.addEventListener("click", () => {

                amount.value = (parseInt(amount.value) + 1);
            });
            minus.addEventListener("click", () => {

                if (amount.value > 1) {

                    amount.value = (parseInt(amount.value) - 1);
                }
            });
        });
    }
}