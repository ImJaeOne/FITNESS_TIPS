const count = document.getElementsByClassName("count")[1];
const dumbbell = document.getElementsByClassName("dumbbell")[0];

dumbbell.addEventListener('mouseup', function(){
    if(count.innerHTML == '0'){
        count.innerHTML = '1'
    }
    else if(count.innerHTML == '1'){
        count.innerHTML = '0'
    }
})