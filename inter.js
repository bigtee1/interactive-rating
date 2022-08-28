const mainContainer = document.querySelector('.rating-section')
const thankYou = document.querySelector('.thank-you-section')
const submit = document.getElementById('submit-Btn')
const rateAgain = document.getElementById('rate-again')
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.button')

submit.addEventListener('click', () => {
    thankYou.classList.remove('hidden');
})
rateAgain.addEventListener('click', () => {
    thankYou.classList.add('hidden');
})

rates.forEach((rate) => {
    rate.addEventListener('click', ()=> {
        rating.innerHTML = rate.innerHTML;
    })
})