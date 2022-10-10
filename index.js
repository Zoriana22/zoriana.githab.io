/*Search_loop*/
/*let search_loop = document.querySelectorAll('.search_btn');
let search_close = document.querySelectorAll('.search_close');
//open the search_form
search_loop.addEventListener('click',
 function (abc) {
  search_loop.classList.add('search_open');
 });

//close the search_form
search_close.addEventListener('click',
 function (def) {
  search_close.classList.toggle('search_hidden');
 });*/

 document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".search_btn").forEach(function (e) {
     e.addEventListener("click", function () {
        e.classList.add("search_btn--color", "search--active"),
        document.querySelectorAll
        (".header__wrapper-search").forEach(function (e) {
          e.classList.add("search-active")
         })
      })
   }),
   document.querySelectorAll(".search-close").forEach(function (e) {
      e.addEventListener("click", function () {
         document.querySelectorAll
         (".header__wrapper-search ").forEach(function (e) {
          e.classList.remove("search-active")
           }),
           document.querySelectorAll(".search_btn")
           .forEach(function (e) {
            e.classList.remove("search_btn--color", "search--active")
            })
            document.querySelector('input').value = "";
       })
    })
})

/*SLIDER*/
const swiper = new Swiper('.swiper', {
 // Optional parameters
 loop: true,
 // If we need pagination
 pagination: {
   el: '.swiper-pagination',
   clickable: true,
 },
 // Navigation arrows
 navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
});

/*BURGER*/
let burger = document.querySelector(`.burger`);
let menu = document.querySelector(`.header__nav`);
let menuLinks = menu.querySelectorAll(`.nav__item`);

burger.addEventListener(`click`,
 function () {
  burger.classList.toggle(`burger--active`);
  menu.classList.toggle(`header__nav--active`);
  document.body.classList.toggle(`stop-scroll`);
 })

menuLinks.forEach(function (el) {
 el.addEventListener(`click`, function () {
  burger.classList.remove(`burger--active`);
  menu.classList.remove(`header__nav--active`);
  document.body.classList.remove(`stop-scroll`);
 })
})

/*TABs*/
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');
let markedStep = document.querySelectorAll('.markedStep');

tabsBtn.forEach(function(element){
 element.addEventListener('click', function (e){
  const path = e.currentTarget.dataset.path;

  tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
  e.currentTarget.classList.add('tabs-nav__btn--active');

  tabsBtn.forEach(function(btn){btn.classList.remove('markedStep')});
  e.currentTarget.classList.add('markedStep');

  tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
  document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
 })
})

/*accordion*/
new Accordion('.accordion-list', {
 elementClass: 'accordion',
 triggerClass: 'accordion__control',
 panelClass: 'accordion__content',
 activeClass: 'accordion--active'
})
/*
const btn_acc = document.querySelectorAll('.accordion__control')
const svg_acc = document.querySelectorAll('.list--circle')

btn_acc.forEach(function(cross) {

   cross.addEventListener('click', () => {
    svg_acc.classLIst.toogle('accordion__top .list--circle--active');
   })
})

btn_acc.addEventListener('click',
 function () {
  svg_acc.classList.toggle('accordion__top .list--circle--active');
 })*/

