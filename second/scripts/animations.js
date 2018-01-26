// Have the phone slide in from the right on page load

function phoneUp() {
  const phone = document.querySelector('.iphone');

  window.addEventListener('load', function() {
    phone.classList.add('iphoneNew');
  });
};

window.onload = phoneUp();


// Lower opacity on hovered elements siblings

 const projectsExample = document.querySelectorAll('.projects-example');
 const first = document.querySelectorAll('.first');

 // console.log(projectsExample);




//
//   for (example of projectsExample) {
//     example.addEventListener('mouseover', function(){
//
//       if (this.classList.contains('projects-example')) {
//         example.style.opacity = "0.5";
//         }
// });

      // example.not(this).style.opacity = "0.5";
