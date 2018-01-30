const scroll = document.querySelector('.scroll');
const name = document.querySelector('h1');
const middle = document.querySelector('.middle-section');
const textLanding = document.querySelector('.text-content-landing');
const contact = document.querySelector('.button');
const contactMenu = document.querySelector('.contact-menu');
const menuShow = document.querySelector('.menuFromBurger');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  menuShow.classList.toggle('menuShowOnClick');
})


const homeMenu = document.querySelector('.home-menu');
const portfolioMenu = document.querySelector('.portfolio-menu');
const aboutMenu = document.querySelector('.about-menu');

const home = document.querySelector('#home');
const portfolio = document.querySelector('#portfolio');
const about = document.querySelector('#about');

console.log(window.scrollY);

scroll.addEventListener('click', () => {
  middle.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
})

homeMenu.addEventListener('click', () => {
  menuShow.classList.toggle('menuShowOnClick');
  hamburger.classList.remove('is-active');
  home.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
});

portfolioMenu.addEventListener('click', () => {
  portfolio.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
})
aboutMenu.addEventListener('click', () => {
  about.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
})

const navbar = document.querySelector("nav");
const sticky = navbar.offsetTop;

window.addEventListener('scroll', function() {

  const top = middle.getBoundingClientRect().top;
  console.log(top);

  if (top <= 550 && !textLanding.classList.contains('hide-landing')) {
    textLanding.classList.add('hide-landing');
  }
   if (top > 570 && textLanding.classList.contains('hide-landing')) {
    textLanding.classList.remove('hide-landing');
  }

  if (top <= 550 && !scroll.classList.contains('hide-landing')) {
    scroll.classList.add('hide-landing');
  }
   if (top > 570 && scroll.classList.contains('hide-landing')) {
    scroll.classList.remove('hide-landing');
  }

    console.log(window.scrollY);

  });
