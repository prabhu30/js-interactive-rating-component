let feedbackPage = document.getElementsByClassName('product__feedback')[0];
let thanksPage = document.getElementsByClassName('product__thanks')[0];

let elements = document.getElementsByClassName('product__rating-button');

let btn = document.getElementsByClassName('product__submit');

let givenRating = document.getElementsByClassName('givenRating')[0];

Array.from(elements).forEach((ele) => {
    ele.addEventListener("click", () => {
        givenRating.innerHTML = ele.innerHTML
    })
})

// THIS BELOW CODE IS ALTERNATIVE FOR Array.from() method

// for (let ele of elements) {
//     ele.addEventListener("click", () => {
//         givenRating.innerHTML = ele.innerHTML
//     })
// }

btn[0].addEventListener("click", function () {
    feedbackPage.style.display = 'none';
    thanksPage.style.display = 'grid';
});

