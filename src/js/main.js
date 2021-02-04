// changing styles for desctop - mobile menu
let burger = document.querySelector(".header_burger");
let close = document.querySelector(".header_close");
let header = document.querySelector(".header");
let menuList = document.querySelector(".header_menu__list");
let bodyPage = document.querySelector(" body ");
let logo = document.querySelector(".logo_head");
let logoMob = document.querySelector(".mobile_logo");

burger.addEventListener('click', () => {
    close.style.display = "block";
    burger.style.display = "none";
    logo.style.position = "absolute";
    logoMob.style.position = "initial";
    logoMob.style.opacity = "1";
    logo.style.opacity = "0";
    header.style.backgroundColor = "#fff";
    menuList.classList.add('header_menu__list-mobile');
    bodyPage.classList.add('scroll-hidden');
});
close.addEventListener('click', () => {
    close.style.display = "none";
    burger.style.display = "block";
    logo.style.position = "initial";
    logoMob.style.position = "absolute";
    logo.style.opacity = "1";
    logoMob.style.opacity = "0";
    header.style.backgroundColor = "transparent";
    menuList.classList.remove('header_menu__list-mobile');
    bodyPage.classList.remove('scroll-hidden');
});

// footer button download

let buttons = document.querySelectorAll('.radio-button__input');
buttons.forEach( (elem) =>  {
    let getInputValue = elem.getAttribute("value");
    let btnDownLoad = document.querySelector("#check_value");
    elem.onclick = () => {
        btnDownLoad.setAttribute("href", "");
        btnDownLoad.setAttribute("href", getInputValue)
    }
});

// active url
$(function() {
    $('.header_menu [href]').each(function() {
        if (this.href == window.location.href) {
            $(this).addClass('active');
        }
    });
});

// animation for page change





