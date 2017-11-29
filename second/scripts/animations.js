// Have the phone slide in from the right on page load

function phoneUp() {
  const phone = document.querySelector('.iphone');

  window.addEventListener('load', function() {
    phone.classList.add('iphoneNew');
  });
};

window.onload = phoneUp();


// Lower opacity on hovered elements siblings

// FRÅGA ELINA OM DETTA
// SE CCS'sen också!!!

 const projectsExample = document.querySelectorAll('.projects-example');
 const first = document.querySelectorAll('.first');

 console.log(projectsExample);



projectsExample.addEventListener('mouseover', function(event){
    first.classList.add('black');
  });
