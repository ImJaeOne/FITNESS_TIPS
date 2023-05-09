const header = document.getElementById("header");
const wrapNav = document.getElementById("wrap_nav");
const navExercise = document.getElementsByClassName("nav_exercise")[0];

window.addEventListener('scroll',function(){
    if(window.scrollY > 220){
        wrapNav.classList.add('nav');
        navExercise.classList.add('select');
    }
    else{
        wrapNav.classList.remove('nav');
        navExercise.classList.remove('select');
    }
})