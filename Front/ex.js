const asideBar = document.getElementById("aside_bar");

window.onscroll = function(){scrollfunction1()};

function scrollfunction1(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        asideBar.classList.add('scrollon1'); //사이드바
    } else{
        asideBar.classList.remove('scrollon1');
    }
}