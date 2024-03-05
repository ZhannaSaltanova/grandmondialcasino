const swiper = new Swiper('.swiper', {
  slidesPerView: 6, 
  spaceBetween: 10, 
  slidesPerGroup: 4, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1: {
      slidesPerView: 3, 
      spaceBetween: 10, 
    },
    769: {
      slidesPerView: 4, 
      spaceBetween: 30, 
    },
    1024: { 
      slidesPerView: 6, 
      spaceBetween: 30  
    }
  },
});


  
  let toggleButton = document.querySelector('.toggle');
  let langItems = document.querySelector('.lang-items');
  
  toggleButton.addEventListener('click', function () {
      if (langItems.style.display === 'none' || langItems.style.display === '') {
          langItems.style.display = 'block';
      } else {
          langItems.style.display = 'none';
      }
  });