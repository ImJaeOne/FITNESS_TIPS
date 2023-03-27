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

const cancel = document.getElementsByClassName("cancel");
cancel[0].onclick = function(){
    alert('작성이 취소되었습니다.');
    history.back();
}


const complete = document.getElementsByClassName("complete");
complete[0].onclick = function(){
    /*게시판 사이트로 돌아가기*/ 
}
