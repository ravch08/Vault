'use strict';

const header = document.querySelector('header');
const closeBtn = document.querySelector('.btn-close');
const scrollTop = document.querySelector('.scrollTop');
const sidebar = document.querySelector('.sidebar-menu');
const bannerSection = document.querySelector('.heroSection');
const hamburgerMenu = document.querySelector('.hamburger-menu');

const fadeIns = document.querySelectorAll('.fade-in');
const SlideInLefts = document.querySelectorAll('.slide-inLeft');
const SlideInRights = document.querySelectorAll('.slide-inRight');


// -------------------------------------------------------------------------------------
//                               Intersection Observer
// -------------------------------------------------------------------------------------

const options = {
   threshold: 1
};

const appearOptions = {
   threshold: 0.5,
   rootMargin: '-100px 0px -100px 0px'
};

const headerObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      !entry.isIntersecting ? header.classList.add('sticky') : header.classList.remove('sticky');
   });
}, options);

const scrollObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      !entry.isIntersecting ? scrollTop.classList.add('show') : scrollTop.classList.remove('show');
   });
}, options);

const appearObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (!entry.isIntersecting) return
      else {
         entry.target.classList.add('appear');
         appearObserver.unobserve(entry.target);
      };
   });
}, appearOptions);

scrollObserver.observe(bannerSection);
headerObserver.observe(bannerSection);

fadeIns.forEach(fadeIn => appearObserver.observe(fadeIn));
SlideInLefts.forEach(SlideInLeft => appearObserver.observe(SlideInLeft));
SlideInRights.forEach(SlideInRight => appearObserver.observe(SlideInRight));

// -------------------------------------------------------------------------------------
//                                  Event Listeners 
// -------------------------------------------------------------------------------------

const openSidebar = () => sidebar.classList.add('openSidebar');
const closeSidebar = () => sidebar.classList.remove('openSidebar');

closeBtn.addEventListener('click', closeSidebar);
hamburgerMenu.addEventListener('click', openSidebar);

scrollTop.addEventListener('click', function () {

   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});

// -------------------------------------------------------------------------------------
//                                         SWIPER
// -------------------------------------------------------------------------------------

const swiperTestimonial = new Swiper('#swiper-testimonial', {

   init: true,
   loop: true,
   speed: 1500,
   spaceBetween: 30,
   loopedSlides: 50,
   grabCursor: true,
   centeredSlides: true,
   breakpointsInverse: true,
   slideToClickedSlide: true,
   loopFillGroupWithBlank: false,

   breakpoints: {
      768: {
         slidesPerView: 1
      },

      1024: {
         slidesPerView: 3
      }
   },

   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   }
});