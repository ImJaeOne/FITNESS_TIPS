const Editor = toastui.Editor;
	
const editor = new Editor({
        el: document.querySelector('#editor'),
        toolbarItems: [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
        ['scrollSync'],
        ],
        height: '600px',
        initialEditType: 'wysiwyg',
        previewStyle: 'vertical',
    });

seeHtml = function(){
    alert(editor.getHTML());
}
seeMd = function(){
    alert(editor.getMarkdown());
}
const cancel = document.getElementsByClassName("cancel");
cancel.onclick = function(){
    history.back();
}
const complete = document.getElementsByClassName("complete");
complete.onclick = function(){
    /*게시판 사이트로 돌아가기*/ 
}
