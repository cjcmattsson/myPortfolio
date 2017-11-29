function phoneUp() {
  const phone = document.querySelector('.iphone');

  window.addEventListener('load', function() {
    phone.classList.add('iphoneNew');
  });
};



window.onload = phoneUp();
