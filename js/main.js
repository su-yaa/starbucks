const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input")

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.removeAttribute("placeholder")
})

const badgeEl = document.querySelector("header .badges");

window.addEventListener("scroll", _.throttle(function () {
  if(window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none',
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity : 1, 
      display : 'block',
    });
  }
}, 300))

const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach((item, idx) => {
  gsap.to(item, 1, {
    delay: (idx + 1) * .7,
    opacity: 1,
  })
})


// swiper
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});