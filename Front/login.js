const Show = document.getElementsByClassName("eye")[0];
const PassWord = document.getElementsByClassName("login_pw")[0];

Show.addEventListener('mouseup',function(){
    console.log("e");
    if(PassWord.type === "password"){
        PassWord.type = "text";
    }
    else{
        PassWord.type = "password";
    }
})