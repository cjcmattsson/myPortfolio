const body = document.querySelector('body');
const loadingPage = document.querySelector('.loading-page');
const loader = document.querySelector('.loader');

function stopScroll() {
  body.classList.add('no-scroll');
  setTimeout(() => {
    body.classList.remove('no-scroll');
    loadingPage.classList.add('hide-loading');
    loader.classList.add('hide-loading');
  }, 1500);
  setTimeout(() => {
    loadingPage.classList.add('remove-loading');
    loader.classList.add('remove-loading');
  }, 1800);
}

window.onload = stopScroll;

window.onbeforeunload = function(){ window.scrollTo(0,0); }
