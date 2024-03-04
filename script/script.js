
  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 30
      }
  },
  keyboard: {
      enabled: true,
      onlyInViewport: false,
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