const scroll = document.querySelector('.scroll');
const name = document.querySelector('h1');
const middle = document.querySelector('.middle-section');

console.log(window.scrollY);

scroll.addEventListener('click', function() {
  middle.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });

})
