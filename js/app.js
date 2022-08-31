const menu = document.querySelector('.menu');
const btnHamburger = document.querySelector('.hamburger');
const btnMenuClose = document.querySelector('#btnMenuClose')

const cart = document.querySelector('.cart');
const btnCart = document.querySelector('.btnCart');

const btnPlus = document.querySelector('#btnPlus');
const btnMinus = document.querySelector('#btnMinus');
const productCounter = document.querySelector('.counter');

const gallery = document.querySelectorAll('.pic');
const heroImg = document.querySelector('.product-hero');

const btnNext = document.querySelector('.next');
const btnPrevious = document.querySelector('.previous');

// Numerical Variable
let productCounterValue = 1;


btnHamburger.addEventListener('click', onHamburgerClick);
btnMenuClose.addEventListener('click', onBtnMenuCloseClick);

btnCart.addEventListener('click', openCart);

btnPlus.addEventListener('click', productCounterPlus);
btnMinus.addEventListener('click', productCounterMinus);

gallery.forEach(img => {
    img.addEventListener('click', onThumbClick)
});

btnNext.addEventListener('click', handleBtnClickNext);
btnPrevious.addEventListener('click', handleBtnClickPrevious);

function onHamburgerClick() {
    menu.classList.remove('hidden');
}

function onBtnMenuCloseClick() {
    menu.classList.add('hidden');
}

function openCart() {
    console.log('opening');
    cart.classList.toggle('hidden');
}

function productCounterPlus() {
    setProductCounter(1);
}

function productCounterMinus() {
    setProductCounter(-1);
}

function setProductCounter(value) {
    if ((productCounterValue + value) > 0) {
        productCounterValue += value;
        productCounter.innerHTML = productCounterValue;
    }
}

function onThumbClick(event) {
    // clear active state for all thumbnails
    gallery.forEach(img => {
        img.classList.remove('active');
    });
    // set active thumbnail
    event.target.parentElement.classList.add('active');
    // update hero page 
    heroImg.src = event.target.src.replace('-thumbnail', '');
}

function handleBtnClickNext() {
    let imageIndex = getCurrentImageIndex();
    imageIndex++;
    if (imageIndex > 4) {
        imageIndex = 1;
    }
    setHeroImage(imageIndex);

    console.log('reture');
}

function handleBtnClickPrevious() {
    let imageIndex = getCurrentImageIndex();
    imageIndex--;
    if (imageIndex < 1) {
        imageIndex = 4;
    }
    setHeroImage(imageIndex);
}

function getCurrentImageIndex() {
    const imageIndex = parseInt(heroImg.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''));
    return imageIndex;
}

function setHeroImage(imageIndex) {
    heroImg.src = `./images/image-product-${imageIndex}.jpg`;
    // image are not in sync
    gallery.forEach(img => {
        img.classList.remove('active');
    });
    // set active thumbnail
    gallery[imageIndex-1].classList.add('active');
}
