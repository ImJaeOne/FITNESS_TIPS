const joinId = document.getElementsByClassName("join_id")[0];
const Circle = document.getElementsByClassName("circle")[0];
const Id = document.getElementsByClassName("member_field")[0];

function ID(){
    if(joinId.value == ""){
        Circle.classList.add('incorrect');
    }
    else{
        Circle.classList.add('correct');
        console.log(e);
    }
}