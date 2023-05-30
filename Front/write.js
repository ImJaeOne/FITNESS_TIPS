const editor = new toastui.Editor({
    placeholder: "내용을 입력해주세요.",
    previewStyle: "vertical",
    el: document.querySelector("#editor"),
    language: "ko-KR",
    height: '500px',
    initialEditType: "wysiwyg",
    toolbarItems: [
        // 툴바 옵션 설정
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock']
    ]
    });

const header = document.getElementById("header");
const wrapNav = document.getElementById("wrap_nav");
const navExercise = document.getElementsByClassName("nav_exercise")[0];

window.addEventListener('scroll',function(){
    if(window.scrollY > 220){
        wrapNav.classList.add('nav');
        navExercise.classList.add('select');
    }
    else{
        wrapNav.classList.remove('nav');
        navExercise.classList.remove('select');
    }
})