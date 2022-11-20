

const  BtnIconSearch = document.querySelector('#search-btn') as HTMLDivElement
const  navbar = document.querySelector('.navbar') as HTMLElement
const FormToggleInputSearch =document.querySelector('.search-form')as HTMLFormElement
const menu =document.querySelector('#menu-btn') as HTMLDivElement 
const Btncard =  document.querySelector('#card') as HTMLDivElement
const FormToggleLogin=document.querySelector('.login-form')as HTMLFormElement


  
// active CLASS EXIST IN CSS  
/**
 *   &.active{
                right:2rem;
                transition: .5s linear;
               
               
                
            }
 */

BtnIconSearch.onclick = () =>{
    FormToggleInputSearch.classList.toggle('active');
    navbar.classList.remove('active');
  }

Btncard.onclick = () =>{
    FormToggleLogin.classList.toggle('active');
    navbar.classList.remove('active');
  }
menu.onclick = () =>{
    navbar.classList.toggle('active');
    FormToggleInputSearch.classList.remove('active');
    FormToggleLogin.classList.remove('active');
  }
  
window.onscroll = () =>{
    FormToggleInputSearch.classList.remove('active');
    FormToggleLogin.classList.remove('active');
    navbar.classList.remove('active');
  }
 
  