const large = document.querySelector('.project');
const largeAll = document.querySelectorAll('.project');
const readMore = document.querySelector('.read-more');
const readMoreAll = document.querySelectorAll('.read-more');
const wrapper = document.querySelector('.wrapper');



Array.from(readMoreAll).forEach(function(read) {
  read.addEventListener('click', () => {
    large.classList.toggle('large-project');
    body.classList.toggle('stop-scroll');
  })
})
