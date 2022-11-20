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
//# sourceMappingURL=index.js.map