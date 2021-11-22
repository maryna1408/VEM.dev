const heroSlider = new Swiper(".slider", {
    slidesPerView: 1,
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 5000,
    },
    });

    const testimonials_slider = new Swiper('.testimonials_swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.slider-next',
          prevEl: '.slider-prev',
        },
        pagination: {
          el: '.slider-pagination',
          clickable: true,
          bulletClass: "slider_bullet",
          bulletActiveClass: "slider_bullet_active"
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }
      })