const arrowLeft = document.getElementById('carousel-left');
const arrowRight = document.getElementById('carousel-right');
const car = document.querySelector('.carousel-car');
let carouselWidth = document.querySelector('.carousel-content').offsetWidth;
let maxOffset = 1;
let offset = 0;
if(window.innerWidth <= 720){
    maxOffset = 5;
}
console.log(carouselWidth);
window.addEventListener('resize', () => {
    carouselWidth = document.querySelector('.carousel-content').offsetWidth;
    if(window.innerWidth <= 720){
        maxOffset = 5;
    } else {
        maxOffset = 1;
    }
    car.style.transform = `translateX(-${0}px)`;
})

arrowRight.addEventListener('click', () => {
    if(offset < maxOffset){
        offset++;
    } else {
        offset = 0;
    }
    car.style.transform = `translateX(-${carouselWidth * offset}px)`;
})
arrowLeft.addEventListener('click', () => {
    if(offset > 0){
        offset--;
    } else {
        offset = maxOffset;
    }
    car.style.transform = `translateX(-${carouselWidth * offset}px)`;
})