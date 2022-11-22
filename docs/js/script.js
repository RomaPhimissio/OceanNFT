//Burger Menu

const burgerMenu = document.querySelector('.page-header__burger');
if (burgerMenu) {
   const headerNav = document.querySelector('.page-header__nav');
   const pageBody = document.querySelector('.page-body');
   burgerMenu.addEventListener("click", function (e) {
      burgerMenu.classList.toggle('active');
      headerNav.classList.toggle('active');
      pageBody.classList.toggle('lock');
   })
};

new Swiper('.event__list-wrap', {
   // клавиатура
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
   },

   // ширина слайда
   slidesPerView: 'auto',

   // Отступ между слайдами
   spaceBetween: 25
});


new Swiper('.users__list-wrap', {
   // клавиатура
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
   },

   // ширина слайда
   slidesPerView: 'auto',

   // Отступ между слайдами
   spaceBetween: 25
});


// ! Footer-Spoiler

let body = document.querySelector('.home');
body.addEventListener("click", toggleSpoiler);

function toggleSpoiler(e) {
   if (e.target.closest(".footer-content__subtitle")) {
      e.target.closest(".footer-content__item").classList.toggle("opened");
      let spoilerWrapper = e.target.closest(".footer-content__subtitle").nextElementSibling;
      if (!e.target.closest(".footer-content__item").classList.contains("opened")) {
         spoilerWrapper.style.height = null;
      } else {
         spoilerWrapper.style.height = spoilerWrapper.scrollHeight + "px";
      }
   }
}