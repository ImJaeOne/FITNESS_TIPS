
//아이디 유효성 검사

const joinId = document.getElementsByClassName("join_id")[0];
const Circle_id = document.getElementsByClassName("circle")[0];
const reg_ID = /^([a-z0-9]{6,12})+$/;

joinId.addEventListener('input', function(){
    if(!reg_ID.test(joinId.value)){
        Circle_id.classList.add('incorrect');
        Circle_id.classList.remove('correct');
    }
    else{
        Circle_id.classList.add('correct');
        Circle_id.classList.remove('incorrect');
    }
})

//비밀먼호 유효성 검사

const joinPw = document.getElementsByClassName("join_pw")[0];
const Circle_pw = document.getElementsByClassName("circle")[1];
const reg_PW = /^([A-Za-z0-9]{6,12})+$/;

joinPw.addEventListener('input', function(){
    if(!reg_PW.test(joinPw.value)){
        Circle_pw.classList.add('incorrect');
        Circle_pw.classList.remove('correct');
    }
    else{
        Circle_pw.classList.add('correct');
        Circle_pw.classList.remove('incorrect');
    }
})

//비밀번호 확인

const joinPwcf= document.getElementsByClassName("join_pwcf")[0];
const Circle_pwcf = document.getElementsByClassName("circle")[2];

joinPwcf.addEventListener('input', function(){
        if(joinPwcf.value != joinPw.value){
            Circle_pwcf.classList.add('incorrect');
            Circle_pwcf.classList.remove('correct');
        }
        else{
            Circle_pwcf.classList.add('correct');
            Circle_pwcf.classList.remove('incorrect');
        }
})

//이름 유효성 검사

const joinName = document.getElementsByClassName("join_name")[0];
const Circle_name = document.getElementsByClassName("circle")[3];
const reg_NAME = /^[가-힣]{2,5}$/;

joinName.addEventListener('input', function(){
    if(!reg_NAME.test(joinName.value)){
        Circle_name.classList.add('incorrect');
        Circle_name.classList.remove('correct');
    }
    else{
        Circle_name.classList.add('correct');
        Circle_name.classList.remove('incorrect');
    }
})

const Confirm = document.getElementById("confirm");
const loginLink = 'login.html';

Confirm.addEventListener("mouseup",function(){
    if(!reg_ID.test(joinId.value)){
        joinId.focus();
    }
    else if(!reg_PW.test(joinPw.value)){
        joinPw.focus();
    }
    else if(joinPwcf.value != joinPw.value){
        joinPwcf.focus();
    }
    else if(!reg_NAME.test(joinName.value)){
        joinName.focus();
    }
    else {
        alert('회원가입에 성공하셨습니다.');
        window.open(loginLink);
    }
})