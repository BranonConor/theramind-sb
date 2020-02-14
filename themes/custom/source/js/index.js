// --------------------------- GLOBALS --------------------------------
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const mobileLinks = document.querySelectorAll('.mobileLink');
const topPhone = document.querySelector('.strip-info');
const page = document.querySelector('html');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const testimonials = document.querySelectorAll('.testimonial');
const currentQuote = document.querySelector('.active-quote');


// ------------------------- HELPER FUNCS --------------------------------
const expandMenu = () => {
    // take the mobile nav menu and reveal it on a hamburger click
    navMobile.classList.toggle('revealNavMobile');
}
const showMobileMenu = () => {
    // loop through each mobile menu link, remove the "display none" and 
    for (let i = 0; i< mobileLinks.length; i++) {
        mobileLinks[i].classList.toggle('display-none');
    }
}

let pointer = 1;
console.log(pointer);
const moveLeft = () => {
    if(pointer > 0) {
        pointer--;
    }
}
const moveRight = () => {
    if(pointer < testimonials.length-1) {
        pointer++;
    }
}
const renderNewQuote = () => {
    for(let i = 0; i < testimonials.length; i++) {
        if(i === pointer) {
            testimonials[i].classList.remove('inactive-quote');
            testimonials[i].classList.add('active-quote');
        } else {
            testimonials[i].classList.remove('active-quote');
            testimonials[i].classList.add('inactive-quote');
        }
    };
}
//const moveAndFix = () => {
//    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//      topPhone.classList.toggle('move-and-fix');
//    }
//}


// ---------------------------- FUNCTIONS -------------------------------
// Burger animation
const hamburgerClick = (x) => {
    x.classList.toggle('change');
}
// Expand Mobile Menu
hamburger.addEventListener('click', function() {
    expandMenu();
    setTimeout(showMobileMenu, 250);
});
// Move Carousel left or right
if(leftArrow || rightArrow) {
    leftArrow.addEventListener('click', function () {
        moveLeft();
        console.log(pointer);
        renderNewQuote();
    });
    rightArrow.addEventListener('click', function () {
        moveRight();
        console.log(pointer);
        renderNewQuote();
    });
}

// Scroll Events for Top Strip 
//window.onscroll = function() {
//    moveAndFix();
//}