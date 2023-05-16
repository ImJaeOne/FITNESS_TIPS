//스크롤 내려갈 시 topBtn 생성. topBtn 누르면 맨 위로
const topBtn = document.getElementsByClassName("topBtn")[0];
const searchBtn = document.getElementsByClassName("searchBtn")[0];
const searchImg = document.getElementsByClassName("fas fa-search")[0];
const asideBar = document.getElementById("aside_bar");

window.onscroll = function(){scrollfunction()};
topBtn.addEventListener("click",topfunction);

function scrollfunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topBtn.classList.add('scrollon');
        topBtn.classList.remove('scrolloff');
        asideBar.classList.add('scrollon2');
    } else{
        topBtn.classList.add('scrolloff');
        topBtn.classList.remove('scrollon');
        asideBar.classList.remove('scrollon2');
    }
}

function topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//footer와 만나면 색 변하도록

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
    if(document.body.scrollTop > footerScrollheight + 70 || document.documentElement.scrollTop > footerScrollheight + 70){
        searchImg.style.backgroundColor = '#ffffff';
        searchImg.innerHTML = `<div class='blackcircle'></div><div class='blackline'></div>`
    } else{
        searchImg.style.backgroundColor = '#000000';
        searchImg.innerHTML = `<div class='whitecircle'></div><div class='whiteline'></div>`
    }
})

//searchBtn 토글
const search = document.getElementsByClassName("search")[0];
const searchBtn_ = document.getElementsByClassName("searchBtn_")[0];

searchBtn_.addEventListener("click",() =>{
    searchBtn.classList.toggle("active");
    search.focus();
    console.log("e")
})