# Portfolio Website
## Responsive Website 

![Contents](https://img.shields.io/github/languages/top/dan-gentile/website)
![Last-Commit](https://img.shields.io/github/last-commit/dan-gentile/website)

### Table of Contents


- [General Info](#general-info)
- [Technologies](#Technologies)
- [Screenshots](#screen-shots)
- [Code Snippets](#code-snippets)


### General Info

A Portfolio Based Responsive Website with contact info, about and portfolio projects.

This project was built using the following:
- HTML
- SCSS
- Javascript

Link to page: <https://dan-gentile.github.io/website/>

### Technologies

This Projects used:
- [SCSS](https://sass-lang.com/)
- [Javascript](https://www.javascript.com/)

### Screen Shots 

--Home Page--
<img width="1003" alt="Screen Shot 2020-09-29 at 9 28 21 AM" src="https://user-images.githubusercontent.com/68626350/94586553-383ddd00-0236-11eb-866d-aca2062d78f4.png">

--Portfolio Page--

<img width="1784" alt="Screen Shot 2020-09-29 at 9 28 08 AM" src="https://user-images.githubusercontent.com/68626350/94586578-43910880-0236-11eb-9f0c-2b4a0a52a656.png">

--Mobile--

<img width="403" alt="Screen Shot 2020-09-29 at 9 40 42 AM" src="https://user-images.githubusercontent.com/68626350/94587835-00d03000-0238-11eb-839f-d8508fc507a6.png">



### Code Snippets
--Menu Code--
~~~
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
~~~

### Authors 
- Dan Gentile 

### License 
- Open Source 
