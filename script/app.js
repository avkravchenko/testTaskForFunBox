const firstItem = document.querySelector(".first-card");
const firstCard = document.querySelector("#firstCard");
const secondItem = document.querySelector('.second-card');
const secondCard = document.querySelector('#secondCard');



firstItem.addEventListener('click', () => {
    firstCard.classList.toggle('active');
})
secondItem.addEventListener('click', () => {
    secondCard.classList.toggle('active');
})