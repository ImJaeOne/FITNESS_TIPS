const shoulder = document.getElementsByClassName("shoulder_1_img");
const chest = document.getElementsByClassName("chest_1_img");
const back = document.getElementsByClassName("back_1_img");
const leg = document.getElementsByClassName("leg_1_img");
const myCheck = document.getElementsByClassName("my_check");
const my_Check = document.getElementsByClassName("my_check_");

function getElementIndex(element, range) {
    if (!!range){
        return [].indexOf.call(element, range);
    }
    return [].indexOf.call(element.parentNode.children, element);
}

[].forEach.call(shoulder, function(el) {
    el.addEventListener('mouseup', function() {
    console.log(getElementIndex(shoulder, el));
    my_Check[getElementIndex(shoulder, el)].classList.toggle('check');
    });
});

[].forEach.call(chest, function(el) {
    el.addEventListener('mouseup', function() {
    console.log(getElementIndex(chest, el));
    my_Check[getElementIndex(chest, el) + shoulder.length].classList.toggle('check');
    });
});

[].forEach.call(back, function(el) {
    el.addEventListener('mouseup', function() {
    console.log(getElementIndex(back, el));
    my_Check[getElementIndex(back, el) + shoulder.length + chest.length].classList.toggle('check');
    });
});

[].forEach.call(leg, function(el) {
    el.addEventListener('mouseup', function() {
    console.log(getElementIndex(leg, el));
    my_Check[getElementIndex(leg, el)+  shoulder.length + chest.length + back.length].classList.toggle('check');
    });
});

// const calenderUi = document.getElementById("calender_ui");

// window.addEventListener('scroll',function(){
//     const calenderScroll = 266;
//     if(document.body.scrollTop > calenderScroll || document.documentElement.scrollTop > calenderScroll){
//         calenderUi.classList.add('scrollon1');
//     } else{
//         calenderUi.classList.remove('scrollon1');
//     }
// })



