AOS.init({
  offset:200,
  duration:1000
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  gsap.from(".search,.navbar-menu,.user,.btn",{
    y:-100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger: {
      each: 0.2,
      from: "start"
    }
  });
  


