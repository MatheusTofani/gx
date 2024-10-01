const prevBtn = document.querySelector('.carousel__button__prev');
const nextBtn = document.querySelector('.carousel__button__next');
const track = document.querySelector('.carousel__container');
const itens = [...document.querySelectorAll('.carousl__item')];

const itemWidth = itens[0].getBoundingClientRect().width + 10;
let currentPosition = 0;

nextBtn.addEventListener('click', () => {

    const maxPosition = (itens.length - 1) * itemWidth;

    if (currentPosition < maxPosition) {
        currentPosition += itemWidth;
        currentPosition += itemWidth;
        currentPosition++;
    }

})