//스크롤 내려갈 시 topBtn 생성. topBtn 누르면 맨 위로
const topBtn = document.getElementsByClassName("topBtn")[0];
const searchBtn = document.getElementsByClassName("searchBtn")[0];

window.onscroll = function(){scrollfunction()};
topBtn.addEventListener("click",topfunction);

function scrollfunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topBtn.classList.add('scrollon');
        topBtn.classList.remove('scrolloff');
    } else{
        topBtn.classList.add('scrolloff');
        topBtn.classList.remove('scrollon');
    }
}

function topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const footerElement = document.getElementById('footer').offsetHeight;
const footerScrollheight = document.documentElement.scrollHeight - footerElement - document.documentElement.clientHeight + 30;

window.addEventListener('scroll', function(){
    if(document.body.scrollTop > footerScrollheight || document.documentElement.scrollTop > footerScrollheight){
        topBtn.style.backgroundColor = '#ffffff';
        topBtn.innerHTML = "<div class='blackarrow'></div>"
    } else{
        topBtn.style.backgroundColor = '#000000';
        topBtn.innerHTML = "<div class='whitearrow'></div>"
    }
})