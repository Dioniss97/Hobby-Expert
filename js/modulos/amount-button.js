export let renderAmount = () => {
    let pluses = document.querySelectorAll(".plus");
    let minuses = document.querySelectorAll(".minus");
    let sumaresta;

    pluses.forEach(plus => {

        plus.addEventListener("click", () => {

            let father = plus.parentNode;
            parseInt(father.querySelector(".amount").value) + 1;

            console.log(father.querySelector(".amount").value);
            console.log(plus.parentNode);
            console.log(father.querySelector(".amount"));
        });
    });

    minuses.forEach(minus => {

        minus.addEventListener("click", () => {

            let father = minus.parentNode;
            parseInt(father.querySelector(".amount").value - 1);

            console.log(father.querySelector(".amount").value);
            console.log(minus.parentNode);
            console.log(father.querySelector(".amount"));
        });
    });
}