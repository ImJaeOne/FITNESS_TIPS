const header = document.getElementById("header");
const wrapNav = document.getElementById("wrap_nav");
const navLink = document.getElementsByClassName("nav_link");

window.addEventListener('scroll',function(){
    if(window.scrollY > 220){
        wrapNav.classList.add('nav');
        navLink[0].classList.add('navLink');
    }
    else{
        wrapNav.classList.remove('nav');
        navLink[0].classList.remove('navLink');
    }
})