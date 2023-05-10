const joinId = document.getElementsByClassName("join_id")[0];
const Circle = document.getElementsByClassName("circle")[0];
const Id = document.getElementsByClassName("member_field")[0];

joinId.addEventListener('focus',function ID(){
    if(joinId.value != "" ){
        Circle.classList.remove('incorrect');
        Circle.classList.add('correct');
        console.log("a");
    }
    else if(joinId.value == ""){
        Circle.classList.remove('correct');
        Circle.classList.add('incorrect');
        console.log("e");
    }
})