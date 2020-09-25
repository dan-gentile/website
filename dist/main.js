// Jquery for the nav menu
const menuBtn = $('.menu-btn');
const hamburger = $('.menu-btn__burger');
const nav = $('.nav');
const menuNav = $('.menu-nav');
const navItems = $('.menu-nav__item');

let showMenu = false;

menuBtn.click(function(e) {
    e.preventDefault();
    toggleMenu();
});


function toggleMenu() {


    if (!showMenu) {
        hamburger.addClass('open');
        nav.addClass('open');
        menuNav.addClass('open');
        navItems.each(function() {
            $(this).addClass('open');
        })
        showMenu = true;
    } else {
        hamburger.removeClass('open');
        nav.removeClass('open');
        menuNav.removeClass('open');
        navItems.each(function() {
            $(this).removeClass('open');
        })
        showMenu = false;

    }

}

// Jquery for adding on load animation to project page

const articleOne = $('.one');
const articleTwo = $('.two');
const articleThree = $('.three');

// $('document').ready(transitionIn());

// function transitionIn() {

//     setTimeout(function() {
//         articleOne.addClass('ready');
//     }, 2000)


// }