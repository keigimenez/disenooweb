document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const swiperContainer = document.querySelector('.swiper');

  fullscreenBtn.addEventListener('click', () => {
    if (swiperContainer.requestFullscreen) {
      swiperContainer.requestFullscreen();
    } else if (swiperContainer.webkitRequestFullscreen) {
      swiperContainer.webkitRequestFullscreen();
    } else if (swiperContainer.msRequestFullscreen) {
      swiperContainer.msRequestFullscreen();
    }
  });
});
