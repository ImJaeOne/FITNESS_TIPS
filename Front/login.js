const Show = document.getElementsByClassName("eye")[0];
const PassWord = document.getElementsByClassName("login_pw")[0];
const check = document.getElementsByClassName("checkbox")[0];
const loginId = document.getElementsByClassName("login_id")[0];

Show.addEventListener('mouseup',function(){
    if(PassWord.type === "password"){
        PassWord.type = "text";
    }
    else{
        PassWord.type = "password";
    }
})

