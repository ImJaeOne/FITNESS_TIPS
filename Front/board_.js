const Open = document.getElementById("open_comment");
const Down = document.getElementsByClassName("down")[0];
const Comment = document.getElementById("board_comment");

Open.addEventListener('mouseup' ,function(){
    Down.classList.toggle("up");
    Comment.classList.toggle("up");
})