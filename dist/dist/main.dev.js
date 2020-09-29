"use strict";

// Jquery for the nav menu
var menuBtn = $('.menu-btn');
var hamburger = $('.menu-btn__burger');
var nav = $('.nav');
var menuNav = $('.menu-nav');
var navItems = $('.menu-nav__item');
var showMenu = false;
menuBtn.click(function (e) {
  e.preventDefault();
  toggleMenu();
});

function toggleMenu() {
  if (!showMenu) {
    hamburger.addClass('open');
    nav.addClass('open');
    menuNav.addClass('open');
    navItems.each(function () {
      $(this).addClass('open');
    });
    showMenu = true;
  } else {
    hamburger.removeClass('open');
    nav.removeClass('open');
    menuNav.removeClass('open');
    navItems.each(function () {
      $(this).removeClass('open');
    });
    showMenu = false;
  }
}