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

//아이콘이 footer와 만나면 색 변하기
/*const headerElement = document.getElementById('header').offsetHeight;
const mainElement = document.getElementById('wrap_content').offsetHeight;
var footerScrollheight = headerElement + mainElement; 이걸로는 어떻게...*/ 

/*CSS의 ::after 선택자를 사용하여 요소의 가상 요소(virtual element)를 생성했다면, 해당 가상 요소에 대한 스타일을 변경하려면 element.style 객체를 직접 사용할 수는 없습니다. 대신, getComputedStyle() 메서드를 사용하여 가상 요소의 스타일 값을 가져온 후, 해당 값을 변경해야 합니다. */
const topBtnArrow = document.getElementsByClassName("arrow")[0];
const topBtnArrowAft = window.getComputedStyle(topBtnArrow, '::after');
const blackColor = Object.assign({}, topBtnArrowAft); //새로운 스타일 객체 생성 setProperty('color', red)로 해당 객체의 속성 값 변경이 안됨...

window.addEventListener('scroll', function(){
    if(document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200){
        topBtn.style.backgroundColor = '#ffffff';
        blackColor.borderTopColor = '5px solid #000000';
        blackColor.borderRightColor = '5px solid #000000';
        topBtnArrow.style.setProperty('--after-content','""') // 적용할 스타일을 포함하는 가상 요소 생성
        topBtnArrow.style.setProperty('--after-style',JSON.stringify(blackColor)); // 변경된 스타일을 JSON 문자열로 저장
    } else{
        topBtn.style.backgroundColor = '#000000';
        blackColor.borderTopColor = '5px solid #ffffff';
        blackColor.borderRightColor = '5px solid #ffffff';
        topBtnArrow.style.setProperty('--after-content','""') 
        topBtnArrow.style.setProperty('--after-style',JSON.stringify(blackColor));
    }
})