const scroll = document.querySelector('.scroll');
const name = document.querySelector('h1');
const middle = document.querySelector('.middle-section');
const textLanding = document.querySelector('.text-content-landing');
const contact = document.querySelector('.contact-button');
const menuShow = document.querySelector('.menuFromBurger');


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
  home.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
})
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

contact.addEventListener('click', () => {
  menuShow.classList.toggle('menuShowOnClick');
})

const navbar = document.querySelector("nav");
const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function() {stickyNavbar()};

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
