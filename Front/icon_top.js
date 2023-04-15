//스크롤 내려갈 시 topBtn 나타내기 
const topBtn = document.getElementsByClassName("topBtn");
const searchBtn = document.getElementsByClassName("searchBtn");

window.onscroll = function(){scrollfunction()};
topBtn[0].addEventListener("click",topfunction);

function scrollfunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topBtn[0].classList.add('scrollon');
        topBtn[0].classList.remove('scrolloff');
    } else{
        topBtn[0].classList.add('scrolloff');
        topBtn[0].classList.remove('scrollon');
    }
}

function topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}