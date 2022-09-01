const ratePage = document.querySelector('.rate-page');
const ratedPage = document.querySelector('.rated-page');

const number = document.querySelector('.numbers');

number.addEventListener('submit', function (e) {
    e.preventDefault();
    const selector = "input[name=ratings]:checked";
    const checkedInput = document.querySelector(selector);

    if (checkedInput === null) return alert('Please choose a rating before submitting!');
    const selectedRating = document.querySelector(".selection");
    selectedRating.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
    ratePage.classList.add("inactive");
    ratedPage.classList.remove("inactive");
})
