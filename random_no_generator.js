const my_button = document.getElementById("my-button");
const lable1 = document.getElementById("lable1");
const lable2 = document.getElementById("lable2");
const lable3 = document.getElementById("lable3");
const max = 100;
const min = 1;
let random_no1;
let random_no2;
let random_no3;

my_button.onclick = function () {
    random_no1 = Math.floor(Math.random() * max) + min;
    random_no2 = Math.floor(Math.random() * max) + min;
    random_no3 = Math.floor(Math.random() * max) + min;

    lable1.textContent = random_no1;
    lable2.textContent = random_no2;
    lable3.textContent = random_no3;
}
