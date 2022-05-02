export let renderAmount = () => {
    let amount = document.getElementsByClassName(".amount");
    let plus = document.getElementsByClassName(".plus");
    let minus = document.getElementsByClassName(".minus");

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