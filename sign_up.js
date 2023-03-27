const Id = document.getElementById('id');
const Password = document.getElementById('password');
const CfPassword = document.getElementById('confirm_password');
const Name = document.getElementById('name');
const IdError = document.getElementById('IdError');
const PwError = document.getElementById('pwError');
const CfPwError = document.getElementById('cfpwError');
const NameError = document.getElementById('nameError');
const IdConfirm = document.getElementById("id_confirm");
/*아이디 조건*/
addEventListener("mouseup",function(){
    if(Id.value == null || Id.value ==""){
        IdError.innerText = "아이디를 입력해주세요.";
    }else{
        IdError.innerText = "";
    }  
})
/*비번 조건*/
addEventListener("mouseup",function(){
    if(Password.value == null || Password.value ==""){
        PwError.innerText = "비밀번호를 입력해주세요.";
    }else{
        PwError.innerText = "";
    }  
})
/*비번 확인*/
addEventListener("mouseup",function(){
    if(CfPassword.value == null || CfPassword.value ==""){
        CfPwError.innerText = "비밀번호를 입력해주세요.";
    }else{
        CfPwError.innerText = "";
    }  
})
/*이름 확인*/
addEventListener("mouseup",function(){
    if(Name.value == null || Name.value ==""){
        NameError.innerText = "이름을 입력해주세요.";
    }else{
        NameError.innerText = "";
    }  
})
/*중복 확인*/
IdConfirm.addEventListener("clcik",function(){
    alert('사용할 수 있는 아이디입니다.');
})
/*회원가입 완료*/
document.getElementById("join_fin").onclick=function(){
    alert('회원가입 성공');
    history.back();
}
