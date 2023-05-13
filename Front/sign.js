//아이디 유효성 검사

const joinId = document.getElementsByClassName("join_id")[0];
const Circle_id = document.getElementsByClassName("circle")[0];

joinId.addEventListener('input', function(){
    const reg_ID = /^[a-z0-9]+$/;
    if(!reg_ID.test(joinId.value) || joinId.value.length < 6 || joinId.value.length > 12){
        Circle_id.classList.add('incorrect');
        Circle_id.classList.remove('correct');
    }
    else{
        Circle_id.classList.add('correct');
        Circle_id.classList.remove('incorrect');
    }
})

//비밀먼호 유효성 검사

const joinPw = document.getElementsByClassName("join_pw")[0]
const Circle_pw = document.getElementsByClassName("circle")[1];

joinPw.addEventListener('input', function(){
    const reg_PW = /^[A-za-z0-9]+$/;
    if(!reg_PW.test(joinPw.value) || joinPw.value.length < 6 || joinPw.value.length > 12){
        Circle_pw.classList.add('incorrect');
        Circle_pw.classList.remove('correct');
        console.log("N");
    }
    else{
        Circle_pw.classList.add('correct');
        Circle_pw.classList.remove('incorrect');
        console.log("E");
    }
})

//비밀번호 확인

const joinPwcf= document.getElementsByClassName("join_pwcf")[0]
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

const joinName = document.getElementsByClassName("join_name")[0]
const Circle_name = document.getElementsByClassName("circle")[3];

joinName.addEventListener('input', function(){
    const reg_NAME = /^[가-힣]{2,5}$/;
    if(!reg_NAME.test(joinName.value)){
        Circle_name.classList.add('incorrect');
        Circle_name.classList.remove('correct');
        console.log("N");
    }
    else{
        Circle_name.classList.add('correct');
        Circle_name.classList.remove('incorrect');
        console.log("E");
    }
})


