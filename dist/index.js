"use strict";
const BtnIconSearch = document.querySelector('#search-btn');
const navbar = document.querySelector('.navbar');
const FormToggleInputSearch = document.querySelector('.search-form');
const menu = document.querySelector('#menu-btn');
const Btncard = document.querySelector('#card');
const FormToggleLogin = document.querySelector('.login-form');
BtnIconSearch.onclick = () => {
    FormToggleInputSearch.classList.toggle('active');
    navbar.classList.remove('active');
};
Btncard.onclick = () => {
    FormToggleLogin.classList.toggle('active');
    navbar.classList.remove('active');
};

menu.onclick = () => {
    navbar.classList.toggle('active');
    FormToggleInputSearch.classList.remove('active');
    FormToggleLogin.classList.remove('active');
};
window.onscroll = () => {
    FormToggleInputSearch.classList.remove('active');
    FormToggleLogin.classList.remove('active');
    navbar.classList.remove('active');
};
 var swiper = new Swiper(".swiper_home", {
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let filterBtn = document.querySelectorAll('.tabs .buttons');
let filterItem = document.querySelectorAll('.products .box-container .box');


filterBtn.forEach(button =>{

  button.onclick = () =>{
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let dataFilter = button.getAttribute('data-filter');

    filterItem.forEach(item =>{

      item.classList.remove('active');
      item.classList.add('hide');

      if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
        item.classList.remove('hide');
        item.classList.add('active');
      }

    });

  };

});
var swiper = new Swiper(".review-slide", {
    loop:true,
    spaceBetween:20,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
 
  
  function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut(){
    setTimeout(loader, 1000);
  }
  window.onload = () =>{

   
  
    fadeOut();
  
  }
  
  

//# sourceMappingURL=index.js.map